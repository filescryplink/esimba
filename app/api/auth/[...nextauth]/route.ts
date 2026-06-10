import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

const SUPER_ADMIN_EMAIL = "balv.airdrop@gmail.com";
const PARTNER_ADMIN_EMAIL = "vaytaichinh.top@gmail.com";

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
      // Check email every time, not just when user is present
      if (token.email) {
        if (token.email === SUPER_ADMIN_EMAIL) {
          token.role = "super_admin";
        } else if (token.email === PARTNER_ADMIN_EMAIL) {
          token.role = "partner_admin";
        } else {
          token.role = "user";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user?.email) {
        session.user.id = "mock-id";
        session.user.partnerId = null;
        session.user.role = (token.role as "super_admin" | "partner_admin" | "user") || "user";
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
    signIn: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };