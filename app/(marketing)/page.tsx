import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[250px] lg:w-[w-424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-4xl font-extrabold text-green-600 tracking-wide">
            Speak Easily
          </h1>
          <p className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
            Speak Easily is a platform that helps you learn to speak English
            fluently.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col  gap-y-5 ">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" signInFallbackRedirectUrl={"/learn"}>
                <Button variant="secondary" size="lg">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl={"/learn"}>
                <Button variant="primaryOutline" size="lg">
                  Already have an account? Sign in
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="secondary" size="lg" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
