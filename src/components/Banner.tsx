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
            The Global Village in Dubai, UAE serves as a vibrant space where cultures from around the world converge to celebrate diversity and heritage. This venue, often hosted as part of larger festivals or events, showcases an array of cultural pavilions, performances, traditional crafts, and cuisine from different countries. It reflects the UAE’s commitment to fostering multicultural interaction and promoting global unity while highlighting its own rich heritage and traditions.
            <br /> <br />
            Such spaces are integral to Dubai's efforts to position itself as a cultural and tourism hub. These events are often part of initiatives like the Dubai Shopping Festival or Dubai Expo, designed to attract visitors from around the world. They provide an opportunity for people to experience the unique traditions and innovations of multiple nations, all within a single, immersive location.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Banner;
