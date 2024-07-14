"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { loginSchema } from "@/app/(marketing)/login/loginSchema";
import { signUpSchema } from "@/app/(marketing)/signup/signUpSchema";
import { supbaseServer } from "@/db/supabaseServer";

export async function loginAction(data: z.infer<typeof loginSchema>) {
  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { error } = await supbaseServer.auth.signInWithPassword(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signupAction(data: z.infer<typeof signUpSchema>) {
  const userData = {
    email: data.email,
    password: data.password,
  };

  const { error } = await supbaseServer.auth.signUp(userData);
  console.log("error", error);
  if (error) {
    throw new Error(error.message);
  }
}
