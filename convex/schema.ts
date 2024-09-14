import { defineSchema, defineTable } from "convex/server";
import { Validator, v } from "convex/values";

// The users, accounts, sessions and verificationTokens tables are modeled
// from https://authjs.dev/getting-started/adapters#models

export const userSchema = {
  email: v.string(),
  name: v.optional(v.string()),
  emailVerified: v.optional(v.number()),
  image: v.optional(v.string()),
};

export const voteType = v.union(v.literal("UP"), v.literal("DOWN"));

export const sessionSchema = {
  userId: v.id("users"),
  expires: v.number(),
  sessionToken: v.string(),
};

export const accountSchema = {
  userId: v.id("users"),
  type: v.union(
    v.literal("email"),
    v.literal("oidc"),
    v.literal("oauth"),
    v.literal("webauthn"),
  ),
  provider: v.string(),
  providerAccountId: v.string(),
  refresh_token: v.optional(v.string()),
  access_token: v.optional(v.string()),
  expires_at: v.optional(v.number()),
  token_type: v.optional(v.string() as Validator<Lowercase<string>>),
  scope: v.optional(v.string()),
  id_token: v.optional(v.string()),
  session_state: v.optional(v.string()),
};

export const verificationTokenSchema = {
  identifier: v.string(),
  token: v.string(),
  expires: v.number(),
};

export const authenticatorSchema = {
  credentialID: v.string(),
  userId: v.id("users"),
  providerAccountId: v.string(),
  credentialPublicKey: v.string(),
  counter: v.number(),
  credentialDeviceType: v.string(),
  credentialBackedUp: v.boolean(),
  transports: v.optional(v.string()),
};

const authTables = {
  users: defineTable(userSchema).index("email", ["email"]),
  sessions: defineTable(sessionSchema)
    .index("sessionToken", ["sessionToken"])
    .index("userId", ["userId"]),
  accounts: defineTable(accountSchema)
    .index("providerAndAccountId", ["provider", "providerAccountId"])
    .index("userId", ["userId"]),
  verificationTokens: defineTable(verificationTokenSchema).index(
    "identifierToken",
    ["identifier", "token"],
  ),
  authenticators: defineTable(authenticatorSchema)
    .index("userId", ["userId"])
    .index("credentialID", ["credentialID"]),
};

export default defineSchema({
  ...authTables,
  providers: defineTable({
    name: v.string(),
    email: v.optional(v.string()),
    phoneNumber: v.string(),
    address: v.object({
      street: v.string(),
      city: v.string(),
      province: v.string()
    }),
    specializations: v.string(),
    website: v.optional(v.string()),
  }),
  posts: defineTable({
    postId: v.id("posts"),
    userId: v.id("users"),
    title: v.string(),
    content: v.string(),
    isArchived: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_archived", ["isArchived"])
    .index("by_createdAt", ["createdAt"]),
  
  comments: defineTable({
    commentId: v.id("comments"),
    postId: v.id("posts"),
    userId: v.id("users"),
    content: v.string(),
    isArchived: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_post", ["postId"])
    .index("by_archived", ["isArchived"])
    .index("by_createdAt", ["createdAt"]),
  
  reports: defineTable({
    reportId: v.id("reports"),
    postId: v.optional(v.id("posts")),
    commentId: v.optional(v.id("comments")),
    userId: v.id("users"),
    reason: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_post", ["postId"])
    .index("by_comment", ["commentId"])
    .index("by_createdAt", ["createdAt"]),

    votes: defineTable({
    voteType: voteType,
    userId: v.id("users"),
    postId: v.id("posts"),
    groupId: v.id("group"),
  })
});
