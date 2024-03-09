import { topbarIcon } from "@/assets/icon";

const Topbar = () => {
  return (
    <main className="h-10 bg-black w-full flex justify-center md:justify-evenly items-center text-primary">
      <div className="flex gap-2 items-center">
        {topbarIcon} <span>Lorem ipsum dolor</span>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        {topbarIcon} <span>Lorem ipsum dolor</span>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        {topbarIcon} <span>Lorem ipsum dolor</span>
      </div>
    </main>
  );
};

export default Topbar;
