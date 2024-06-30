import { cn } from "@/lib/utils";

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] bg-blue-500 lg:fixed left-0 top-0 px-5 border-r-2 flex-col",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-extrabold text-white">Speak Easily</h1>
      </div>
    </div>
  );
};
