// lib/admin.ts

import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2oj7pET1ZBuS4EzcOiLFuOtUJJH"];

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.includes(userId);
};
