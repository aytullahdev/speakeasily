import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2ibdS1flIvj2QjUfNUuyINBPghJ"];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
