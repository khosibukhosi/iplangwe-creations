import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    service: v.string(),
    details: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("contact_inquiries", {
      ...args,
      createdAt: Date.now(),
    });
    return id;
  },
});
