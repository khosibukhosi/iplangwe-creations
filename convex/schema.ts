import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contact_inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    service: v.string(),
    details: v.string(),
    createdAt: v.number(),
  }),
});
