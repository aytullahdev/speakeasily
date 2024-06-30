import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import React from "react";
import { Header } from "./Header";
import { UserProgress } from "@/components/UserProgress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "english", imageSrc: "/es.svg" }}
          hearts={5}
          points={5}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Hello" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
