import { createClient } from "@/utils/supabase/server";

const adminIds = [
  "user_2ibdS1flIvj2QjUfNUuyINBPghJ",
  "b3983d23-5317-4213-9cef-cc9ebef46720",
];
export const isAdmin = async () => {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData?.user?.id;
  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
