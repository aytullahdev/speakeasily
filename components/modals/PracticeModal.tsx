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
import { usePracticeModal } from "@/app/store/use-practice-modal";
import { useEffect, useState } from "react";
import Image from "next/image";
export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/heart.svg" width={100} height={100} alt="Heart" />
          </div>
        </DialogHeader>
        <DialogTitle className="text-center font-bold text-2xl">
          Practice lesson
        </DialogTitle>
        <DialogDescription className="text-center text-base">
          Use practice lessons to regain hearts and points. You cannot loose
          hearts or points in practice lessons.
        </DialogDescription>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant={"primary"}
              className="w-full"
              size={"lg"}
              onClick={() => {
                close();
              }}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};