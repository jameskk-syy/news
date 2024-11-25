"use client";

import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import NewsCard from "../NewsCard";
import bannerImage from "@/assets/global.jpg";
import bannerImages from "@/assets/fiesta.jpg";
import bannerImagess from "@/assets/food.jpg";
import bannerImagesss from "@/assets/cloth.jpg";
import Image from "next/image";


const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getnews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };

    getnews();
  }, [category, search]);

  console.log(news);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
        {/* search bar */}
        <SearchBar onSearch={setSearch} />

        {/* category filtering */}
        {/* <CategoryFilter onCategoryChange={setCategory} /> */}
      </div>
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">The Global Village in Dubai, UAE</h1>
          <p className="text-gray-600 italic">Exploring culture, diversity, and connectivity</p>
        </header>

        {/* News Article Section */}
        <section className="bg-white shadow p-6 mb-8 leading-loose rounded">
          <h2 className="text-2xl font-bold mb-4">Global Village season 29: What’s new, how to get there and everything else you need to know</h2>
          <p className="text-gray-500 italic">Dubai, UAE | November 25, 2024</p>
          <p className="mt-4 mb-4 text-lg">
            What makes it particularly remarkable is that it showcases 27 pavilions, each representing over 75 countries and their unique cultures. Visitors can experience a wide array of international cuisines, traditional crafts, music, and performances, offering a truly global experience. The 29th season of Global Village runs from October 16, 2024, to May 11, 2025, and features exciting new attractions, live entertainment, and themed events throughout the season. It’s an immersive journey into the rich diversity of the world, making it a must-visit destination for both locals and tourists alike.
          </p>
          <p className="mt-4 mb-4 text-lg">
            Who is the owner of Global Village?<br></br>
            Ahmad Hussain Bin Essa
          </p>
          <p className="mt-4 mb-4 text-lg">
            Why is Global Village closing? <br></br>
            Global Village closes each year at the end of its season, which typically runs from mid-October to early May. The closure is due to the onset of Dubai's hot summer months, which are not conducive to outdoor events. The venue reopens in the cooler months for the next season.

          </p>
          <p className="mt-4 text-lg">
            Food is a major highlight at Global Village, with over 200 restaurants, cafes, and street food stalls to explore, including the newly introduced Restaurant Plaza. You’ve likely come across a variety of tempting dishes on social media, from crispy chips and creamy ice cream to classic corndogs and sweet candyfloss
          </p>
          <p className="mt-4 text-lg">
            In addition to the main park, Global Village offers a variety of exciting attractions:

            Carnaval: This thrilling zone features 170 rides, games, and top attractions where you pay as you play.
            Ripley’s Believe It Or Not!: Explore eccentric displays ranging from optical illusions and pop culture memorabilia to bizarre artifacts. Entry costs Dhs40. You can also visit Ripley’s Marvelous Mirror Maze for Dhs35 or experience the Ripley’s Moving Theater 4D for Dhs35. For a discounted rate, pay Dhs55 to visit two of Ripley's attractions or Dhs75 for all three.
            Snowfest Ice Rink: Enjoy a cool 20-minute skating session for Dhs50, which includes rental socks.
            House of Fear: For those who enjoy a scare, this haunted house features actors and chilling scenes from a haunted cemetery to a spooky hospital ward. Entry is Dhs65.
            Restaurant Plaza: Season 29 introduces a brand-new dining area with 11 two-story restaurants offering international cuisine.
            With so much to explore, it’s worth returning multiple times to experience everything!
          </p>
          <p className="mt-4 text-lg">
            In season 29, Global Village will feature 30 country pavilions representing 90 different cultures, an increase from the 27 pavilions last year. The participating pavilions include those from the UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Afghanistan, Africa, the Americas, China, Egypt, Europe, India, Iran, Iraq, Oman, Japan, Jordan, South Korea, Lebanon, Morocco, Pakistan, Palestine, Sri Lanka, Bangladesh, Syria, Thailand, Turkey, Yemen, Russia, Qatar, and Oman.
          </p>
        </section>

        {/* Photo Essay Section */}
        <section className="bg-white shadow p-6 mb-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Photo Essay: What found in Dubai's Global Village</h2>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
            <div>
              <Image width={200} height={100} className="w-full" src={bannerImage} alt="Traditional Emirati Dance" />
              <p className="mt-2 text-sm text-gray-600">Traditional Emirati dance performance during the opening ceremony, showcasing vibrant cultural expressions.</p>
            </div>
            <div>
              <Image width={200} height={100} className="w-full" src={bannerImages} alt="Moroccan Pavilion" />
              <p className="mt-2 text-sm text-gray-600">The Moroccan pavilion, offering vibrant textiles, fragrant spices, and authentic tea ceremonies.</p>
            </div>
            <div>
              <Image width={200} height={100} className="w-full" src={bannerImagess} alt="Global Village Food Court" />
              <p className="mt-2 text-sm text-gray-600">Global Village Food Streets (in different cities): In some places, "Global Village" can refer to a themed food street or area where street food vendors offer dishes inspired by cuisines from across the globe, including Asian, European, Middle Eastern, and more.</p>
            </div>
            <div>
              <Image width={200} height={100} className="w-full" src={bannerImagesss} alt="Traditional Clothing at Global Village" />
              <p className="mt-2 text-sm text-gray-600">People dressed in traditional clothing, celebrating cultural heritage through fashion and attire.</p>
            </div>
          </div>
        </section>



        {/* Podcast/Radio Section */}
        <section className="bg-white shadow p-6 mb-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Podcast: Voices of the Global Village</h2>
          <audio controls className="w-full">
            <source src="/audio.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <audio controls className="w-full mt-6">
            <source src="/audios.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p className="mt-4 text-gray-600">
            <strong>Highlights:</strong> In this episode, we explore the experiences of organizers and visitors at the global village. Listen to coordinators  who share their thoughts on the cultural significance of this event.
          </p>
        </section>

        {/* Video Section */}
        <section className="bg-white shadow p-6 mb-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Video: Highlights from the Global Village</h2>
          <video controls className="w-full h-[500px] rounded">
            <source src="/vida.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-4 text-gray-600">
            Watch this exclusive video capturing the vibrant energy of Dubai’s global village. From dazzling performances to heartfelt, this video brings the experience to life.
          </p>
        </section>
      </div>



    </div>
  );
};

export default NewsList;
