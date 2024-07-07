import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard: React.FC<Props> = ({ value, variant }) => {
  const imgSrc = variant === "points" ? "/points.svg" : "/heart.svg";
  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-400 border-orange-300",
        variant === "hearts" && "bg-rose-500 border-rose-500"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "points" && "bg-orange-500",
          variant === "hearts" && "bg-rose-700"
        )}
      >
        {variant === "points" ? "Points" : "Hearts"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg",
          variant === "points" && "text-orange-500",
          variant === "hearts" && "text-rose-400"
        )}
      >
        <Image
          src={imgSrc}
          alt={variant}
          width={30}
          height={30}
          className="mr-1.5"
        />
        {value}{" "}
      </div>
    </div>
  );
};
