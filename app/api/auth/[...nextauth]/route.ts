import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Check if user exists in DB
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, user.email!))
        .limit(1);

      if (existingUser.length === 0) {
        // Create new user
        await db.insert(users).values({
          id: user.id,
          email: user.email!,
          name: user.name,
          avatarUrl: user.image,
          role: user.email === process.env.SUPER_ADMIN_EMAIL ? "super_admin" : "pending",
        });
      }

      return true;
    },
    async session({ session, token, user }) {
      // Add user role and id to session
      const dbUser = await db
        .select()
        .from(users)
        .where(eq(users.email, session.user?.email!))
        .limit(1);

      if (dbUser.length > 0) {
        session.user.id = dbUser[0].id;
        session.user.role = dbUser[0].role;
        session.user.partnerId = dbUser[0].partnerId;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
