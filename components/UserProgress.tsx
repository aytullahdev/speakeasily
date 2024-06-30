import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {
    imageSrc: string;
    title: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};
export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href={"/courses"}>
        <Button>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            height={32}
            width={32}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src="/points.svg"
            alt="shop"
            height={29}
            width={29}
            className=" mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src="/heart.svg"
            alt="hears"
            height={22}
            width={22}
            className=" mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-5 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
