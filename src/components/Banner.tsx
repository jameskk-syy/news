import Image from "next/image";

import bannerImg from "@/assets/global.jpg";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className=" dark:bg-slate-800 dark:text-white bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8 py-5">
        <div className="w-full">
          <Image
            src={bannerImg}
            alt="Picture of the author"
            placeholder="blur"
            className="w-full h-[500px] rounded-md"
          />
        </div>

        {/* content */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-medium text-gray-500">The Global Village in Dubai, UAE</h4>
          <h2 className="text-3xl font-bold ">
            {/* Add headline or title here if needed */}
          </h2>
          <p>
          Dubai's Global Village is one of the city's most beloved and budget-friendly family attractions, offering a vibrant mix of international pavilions, delicious global cuisines, market stalls, thrilling rides, and captivating shows.
            <br /> <br /><br></br>
            After a summer break, Global Village reopened on Wednesday, October 16, and will remain open until Sunday, May 11.
            <br></br>
            <br></br>
            If you're planning to visit but feeling overwhelmed by the sheer amount of activities, don't worry—we've got you covered with a complete guide to this exciting and lively destination.
            <br></br>
            <br></br>
            Here’s everything you need to know about this expansive, multi-cultural theme park, including ticket prices, discounts, pavilions, rides, transport options, and more.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Banner;
