import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { Quests } from "@/components/Quest";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscriptions,
} from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const LeaderBoard = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscriptions();
  const leaderBoardData = getTopTenUsers();
  const [userProgress, userSubscription, leaderBoard] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderBoardData,
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
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src={"/leaderboard.svg"}
            alt="leader-board"
            height={90}
            width={90}
          />
          <h1 className="text-2xl text-center font-bold text-neutral-800 my-6">
            Leader Board
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            See how you stack up against other learners!
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {leaderBoard.map((user, index) => {
            return (
              <div
                key={user.userId}
                className="flex  items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
              >
                <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
                <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
                  <AvatarImage
                    src={user.userImageSrc}
                    alt={user.userName}
                    className="object-cover"
                  />
                </Avatar>
                <p className="font-bold text-neutral-800 flex-1">
                  {user.userName}
                </p>
                <p className="text-muted-foreground">{user.points} XP</p>
              </div>
            );
          })}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderBoard;
