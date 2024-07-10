import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { quests } from "@/constants";
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscriptions,
} from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscriptions();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src={"/quests.svg"} alt="quests" height={90} width={90} />
          <h1 className="text-2xl text-center font-bold text-neutral-800 my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests to earn points and hearts!
          </p>
          <ul className="w-full">
            {quests.map((quest, index) => {
              const progress = (userProgress.points / quest.value) * 100;
              return (
                <div
                  key={quest.title}
                  className="flex items-center p-4 gap-x-3 border-t-2"
                >
                  <Image
                    src="/points.svg"
                    width={60}
                    height={60}
                    alt="points"
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold">
                      {quest.title}
                    </p>
                    <Progress value={progress} className="h-3" />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
