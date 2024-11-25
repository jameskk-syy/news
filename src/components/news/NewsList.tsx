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
          <h2 className="text-2xl font-bold mb-4">Global Village: Dubai’s Gateway to World Cultures</h2>
          <p className="text-gray-500 italic">Dubai, UAE | November 25, 2024</p>
          <p className="mt-4 text-lg">
            <strong></strong> Dubai has embraced the concept of a global village, hosting cultural festivals that unite people from all over the world in a single vibrant space. From the Dubai Shopping Festival to Expo 2020, these gatherings showcase the UAE’s commitment to multiculturalism and global unity.
          </p>
          <p className="mt-4">
            <strong></strong> At the heart of this global village lies the idea of bringing diverse traditions, cuisines, art forms, and performances to a shared platform. Visitors can explore pavilions representing countries from Asia, Africa, Europe, and the Americas, each offering unique insights into their heritage. "The global village is not just a festival, it’s a celebration of humanity," said Ali Al-Khatib, an event coordinator at Dubai Expo.
          </p>
          <p className="mt-4">
            Dubai’s Vision 2021 has played a key role in amplifying such initiatives, aiming to diversify the economy and position the country as a cultural and tourism hub. "These events are crucial for connecting with the world and showcasing UAE hospitality," noted Dr. Aisha Al-Saud, a cultural historian.
          </p>
          <p className="mt-4 text-gray-700">
            <em>Quote:</em> "It’s incredible to see the fusion of traditional Emirati dances alongside international music performances. It’s truly a global stage," said visitor Ahmed Mansour.
          </p>
        </section>

        {/* Photo Essay Section */}
        <section className="bg-white shadow p-6 mb-8 rounded">
  <h2 className="text-2xl font-bold mb-4">Photo Essay: What found in Dubai's Global Village</h2>
  <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
    <div>
      <Image width={200} height={100} className="w-full" src={bannerImage} alt="Traditional Emirati Dance"  />
      <p className="mt-2 text-sm text-gray-600">Traditional Emirati dance performance during the opening ceremony, showcasing vibrant cultural expressions.</p>
    </div>
    <div>
      <Image width={200} height={100} className="w-full" src={bannerImages} alt="Moroccan Pavilion"  />
      <p className="mt-2 text-sm text-gray-600">The Moroccan pavilion, offering vibrant textiles, fragrant spices, and authentic tea ceremonies.</p>
    </div>
    <div>
      <Image width={200} height={100} className="w-full" src={bannerImagess} alt="Global Village Food Court"  />
      <p className="mt-2 text-sm text-gray-600">Visitors exploring diverse cuisines, from Middle Eastern delicacies to Asian street food, at the Global Village food court.</p>
    </div>
    <div>
      <Image width={200} height={100} className="w-full" src={bannerImagesss} alt="Traditional Clothing at Global Village"  />
      <p className="mt-2 text-sm text-gray-600">People dressed in traditional clothing, celebrating cultural heritage through fashion and attire.</p>
    </div>
  </div>
</section>



        {/* Podcast/Radio Section */}
        <section className="bg-white shadow p-6 mb-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Podcast: Voices of the Global Village</h2>
          <audio controls className="w-full">
            <source src="/path-to-podcast.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p className="mt-4 text-gray-600">
            <strong>Highlights:</strong> In this episode, we explore the experiences of organizers and visitors at the global village. Listen to interviews with event coordinators and attendees who share their thoughts on the cultural significance of this event.
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
            Watch this exclusive video capturing the vibrant energy of Dubai’s global village. From dazzling performances to heartfelt interviews with visitors, this video brings the experience to life.
          </p>
        </section>
      </div>



    </div>
  );
};

export default NewsList;
