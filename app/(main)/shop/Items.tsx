"use client";
const POINT_TO_REFILL_HEART = 10;
import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (hearts === 5 || points < POINT_TO_REFILL_HEART || pending) return;
    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <div className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4">
        <Image src={"/heart.svg"} alt="heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill Hearts
          </p>
        </div>
        <Button
          disabled={hearts === 5 || points < POINT_TO_REFILL_HEART}
          onClick={onRefillHearts}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              {POINT_TO_REFILL_HEART}
              <Image src={"/points.svg"} alt="points" height={20} width={20} />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};
