"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { useExitModal } from "@/app/store/use-exit-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_sad.svg" width={80} height={80} alt="Mascot" />
          </div>
        </DialogHeader>
        <DialogTitle className="text-center font-bold text-2xl">
          Wait, Don&apos;t go!
        </DialogTitle>
        <DialogDescription className="text-center text-base">
          You&apos;re about to leave the page. Are you sure you want to do that?
        </DialogDescription>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant={"primary"}
              className="w-full"
              size={"lg"}
              onClick={close}
            >
              {" "}
              Keep learning
            </Button>
            <Button
              variant={"dangerOutline"}
              className="w-full"
              size={"lg"}
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
