"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Get all image filenames
const imageFiles = [
  "17848539927628249.jpg",
  "17850602958594964.jpg",
  "17858440818590440.jpg",
  "17863377735559116.jpg",
  "17866674303456367.jpg",
  "17867050290538947.jpg",
  "17872064205498927.jpg",
  "17872266072487341.jpg",
  "17892022878265097.jpg",
  "17894381655390156.jpg",
  "17902583364347778.jpg",
  "17906555577316884.jpg",
  "17907763671301964.jpg",
  "17922382245069155.jpg",
  "17924393046217263.jpg",
  "17933946519153657.jpg",
  "17935493208077827.jpg",
  "17943771533964649.jpg",
  "17946982401094556.jpg",
  "17953846853922650.jpg",
  "17954458563058275.jpg",
  "17959747407036784.jpg",
  "17965969574859519.jpg",
  "17975272388976882.jpg",
  "17991711116879126.jpg",
  "17992671719875184.jpg",
  "17998048325852632.jpg",
  "18004541360838782.jpg",
  "18014185763805413.jpg",
  "18026492969789752.jpg",
  "18031339508572888.jpg",
  "18033813353774372.jpg",
  "18034491758547271.jpg",
  "18046922408698076.jpg",
  "18053603393397197.jpg",
  "18054744020375146.jpg",
  "18062618330286507.jpg",
  "18063582530267694.jpg",
  "18066251855447411.jpg",
  "18068240027177298.jpg",
  "18069586232430972.jpg",
  "18070938527565884.jpg",
  "18073393091379957.jpg",
  "18075535181590446.jpg",
  "18075754394058550.jpg",
  "18078112619238582.jpg",
  "18078656543005316.jpg",
  "18082867790173112.jpg",
  "18083311165921797.jpg",
  "18087690614012115.jpg",
  "18093785509936973.jpg",
  "18097521529717054.jpg",
  "18099071461855402.jpg",
  "18099990145846248.jpg",
  "18102692995802571.jpg",
  "18104783245690063.jpg",
  "18108904333648017.jpg",
  "18109142215634007.jpg",
  "18109735999726221.jpg",
  "18112855795623611.jpg",
  "18123159454552944.jpg",
  "18140220325465873.jpg",
  "18149612134434956.jpg",
  "18162520498397510.jpg",
  "18169233274389751.jpg",
  "18293956210302773.jpg",
  "18300247471274244.jpg",
  "18308043499255506.jpg",
  "18309996991266209.jpg",
  "18324422296175883.jpg",
  "18370581277093164.jpg",
  "18375943735082548.jpg",
  "18384404374147030.jpg",
  "18388515208197385.jpg",
  "18393268177177567.jpg",
  "18401989411193098.jpg",
  "18551625094060715.jpg",
];

// Carousel Component
function Carousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={`/images/${image}`}
              alt={`Zay Phoenix ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Zay Phoenix
          </Link>
          <div className="flex gap-6">
            <a href="#gallery" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Gallery
            </a>
            <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              About
            </a>
            <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Zay Phoenix
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl mx-auto">
            AI Influencer • Digital Creator • Future of Content
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-12 max-w-xl mx-auto">
            Exploring the intersection of artificial intelligence and human creativity, one post at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#gallery"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              View Gallery
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-2 border-zinc-300 dark:border-zinc-700 rounded-full font-semibold hover:border-purple-500 dark:hover:border-pink-500 transition-all duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image Carousel */}
      <section className="px-6 sm:px-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <Carousel images={imageFiles.slice(0, 10)} />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-6 sm:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            A collection of my latest content
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {imageFiles.slice(0, 20).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Image
                  src={`/images/${image}`}
                  alt={`Zay Phoenix ${index + 1}`}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 sm:px-8 py-20 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Welcome to my digital world! I&apos;m Zay Phoenix, a 24 year-old AI influencer pushing the boundaries of what&apos;s possible 
            in the digital content space. Through cutting-edge AI technology and creative vision, I bring unique 
            perspectives and engaging content to audiences worldwide.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Join me as we explore the future of content creation, where artificial intelligence meets human creativity 
            to create something truly special.
          </p>
        </div>
      </section>

      {/* Contact/Social Section */}
      <section id="contact" className="px-6 sm:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            Follow my journey across platforms
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.instagram.com/zay.phoenix"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61586040368901"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Facebook
            </a>
            {/* <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              TikTok
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              YouTube
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-8 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Zay Phoenix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
