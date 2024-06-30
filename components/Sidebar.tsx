import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SideBarItem } from "./SideBarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px]  lg:fixed left-0 top-0 px-5 border-r-2 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={50} alt="mascot" />
          <h1 className="text-2xl  font-extrabold text-green-600 tracking-wide">
            Speak Easily
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SideBarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
        <SideBarItem
          label="Leader Board"
          iconSrc="/leaderboard.svg"
          href="/leaderboard"
        />
        <SideBarItem label="Quests" iconSrc="/quests.svg" href="/quests" />
        <SideBarItem label="Shop" iconSrc="/shop.svg" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
