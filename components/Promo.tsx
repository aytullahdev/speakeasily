"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => {
  return (
    <div className="border-2 rounded-xl p-5 space-y-4 ">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/unlimited.svg" alt="unlimeted" height={60} width={60} />
          <h3 className="font-bold text-lg">Upgrade to Pro</h3>
        </div>
        <p className="text-muted-foreground">
          Get unlimited access to all features!
        </p>

        <Button variant={"super"} className="w-full" size={"lg"} asChild>
          <Link href={"/shop"}>Upgrade TODAY</Link>
        </Button>
      </div>
    </div>
  );
};
