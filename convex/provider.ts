import { query } from "./_generated/server";

export const getProviders = query({
  args: {},
  handler: async (ctx) => {
    const providers = await ctx.db.query("providers").collect();
    return providers;
  },
});