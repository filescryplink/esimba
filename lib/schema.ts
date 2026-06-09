import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// Users table
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  avatarUrl: text("avatar_url"),
  role: text("role", { enum: ["super_admin", "partner_admin", "pending"] })
    .notNull()
    .default("pending"),
  // @ts-ignore
  partnerId: text("partner_id").references(() => partners.id),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .defaultNow(),
});

// Partners table
export const partners = sqliteTable("partners", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  subdomain: text("subdomain").unique(),
  status: text("status", { enum: ["active", "inactive", "pending"] })
    .notNull()
    .default("pending"),
  // @ts-ignore
  ownerUserId: text("owner_user_id").references(() => users.id),
  brandName: text("brand_name"),
  brandColor: text("brand_color"),
  logoUrl: text("logo_url"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .defaultNow(),
});

// Partner leads table
export const partnerLeads = sqliteTable("partner_leads", {
  id: text("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  companyName: text("company_name"),
  contact: text("contact"),
  message: text("message"),
  status: text("status", { enum: ["new", "contacted", "approved", "rejected"] })
    .notNull()
    .default("new"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .defaultNow(),
});

// Orders table
export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(),
  customerEmail: text("customer_email").notNull(),
  partnerId: text("partner_id").references(() => partners.id),
  planCode: text("plan_code").notNull(),
  paymentStatus: text("payment_status", {
    enum: ["pending", "paid", "failed", "refunded"],
  })
    .notNull()
    .default("pending"),
  fulfillmentStatus: text("fulfillment_status", {
    enum: ["pending", "processing", "completed", "failed"],
  })
    .notNull()
    .default("pending"),
  vendorOrderNo: text("vendor_order_no"),
  qrCodeUrl: text("qr_code_url"),
  activationCode: text("activation_code"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  partner: one(partners, {
    fields: [users.partnerId],
    references: [partners.id],
  }),
  ownedPartners: many(partners, {
    relationName: "owner",
  }),
}));

export const partnersRelations = relations(partners, ({ one, many }) => ({
  owner: one(users, {
    fields: [partners.ownerUserId],
    references: [users.id],
    relationName: "owner",
  }),
  users: many(users),
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  partner: one(partners, {
    fields: [orders.partnerId],
    references: [partners.id],
  }),
}));
