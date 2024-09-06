import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const result = await ctx.db.query("User").collect();
    console.log(result);
    return result;
  },
});

export const getProviders = query({
  handler: async (ctx) => {
    const providers = await ctx.db
      .query("User")
      .filter((q) => q.eq(q.field("role"), "provider"))
      .collect();
    return providers;
  },
});