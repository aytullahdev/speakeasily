import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { supbaseServer } from "@/db/supabaseServer";

export const Header = async () => {
  const { data } = await supbaseServer.auth.getUser();
  return (
    <header className="h-20 w-full border-b-2 border-slate-300 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={50} alt="mascot" />
          <h1 className="text-2xl  font-extrabold text-green-600 tracking-wide">
            Speak Easily
          </h1>
        </div>
        {!data?.user?.email ? (
          <Button size="lg" variant={"ghost"}>
            Login
          </Button>
        ) : (
          <div className="h-10 w-10 rounded-full bg-slate-300"></div>
        )}
      </div>
    </header>
  );
};
