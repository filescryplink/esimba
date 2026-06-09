import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      role: "super_admin" | "partner_admin" | "pending";
      partnerId?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    role: "super_admin" | "partner_admin" | "pending";
    partnerId?: string | null;
  }
}
