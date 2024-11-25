"use client"; // Ensure this is at the top to make this a client-side component

import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { useState, useEffect } from "react"; // Add the hooks here
import { useRouter } from "next/navigation"; // Import useRouter for navigationy
import NewsList from "@/components/news/NewsList";

const Newspage = () => {
  const [news, setNews] = useState([]); // Define the state for news
  const router = useRouter();
  useEffect(() => {
    // Check if the user is verified in localStorage
    const isVerified = localStorage.getItem("verified");

    // If not verified, redirect to the login page
    if (!isVerified) {
      router.push("/login");
    }
  }, [router]);
  

  return (
    <section className="py-12 w-full">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      <NewsList />
    </section>
  );
};

export default Newspage;
