import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

const SUPER_ADMIN_EMAIL = "balv.airdrop@gmail.com";
const PARTNER_ADMIN_EMAIL = "partner@example.com";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account", // Force select account prompt
        },
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      // Mock sign in - bypass DB for development
      return true;
    },
    async jwt({ token, user }) {
      // Persist role to token
      if (user?.email) {
        if (user.email === SUPER_ADMIN_EMAIL) {
          token.role = "super_admin";
        } else if (user.email === PARTNER_ADMIN_EMAIL) {
          token.role = "partner_admin";
        } else {
          token.role = "pending";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user?.email) {
        session.user.id = "mock-id";
        session.user.partnerId = null;
        session.user.role = (token.role as "super_admin" | "partner_admin" | "pending") || "pending";
      }
      
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Check if it's the callback URL or relative URL
      if (url.startsWith("/")) {
        return baseUrl + url;
      }
      // Default to appropriate route based on user email (we'll check session in middleware or client)
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };