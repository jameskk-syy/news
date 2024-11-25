"use client"; // Ensure this is at the top to make this a client-side component

import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { useState, useEffect } from "react"; // Add the hooks here
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function Home() {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner />

      <div className="my-12 mt-10">
        <p className="text-lg mb-8 text-gray-600">
        Global Village is famous for its wide range of cultural pavilions, and 2024 introduces several exciting new additions. Each pavilion showcases the rich heritage, crafts, and products of different countries.
        </p>

      </div>

      <NewsLetter />
    </div>
  );
}
