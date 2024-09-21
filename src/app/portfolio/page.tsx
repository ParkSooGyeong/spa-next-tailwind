"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  url?: string;
  filter: string[];
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const portfolioItems: PortfolioItem[] = [
    {
      src: "/images/pot1.png",
      alt: "Portfolio 1",
      title: "SOCCERBEE",
      description:
        "나의 축구 풋살 GPS 데이터로 계산하여 여러 가지 지표를 나타내어 나의 실력을 객관적으로 평가할 수 있게 만든 웹앱입니다.",
      url: "https://apps.apple.com/kr/app/soccerbee/id1601173965",
      filter: ["FRONTEND", "BACKEND", "MOBILE"],
    },
    {
      src: "/images/pot2.png",
      alt: "Portfolio 2",
      title: "SPA Portfolio",
      description: "Next, Typescript, Tailwind을 사용한 반응형 웹페이지입니다.",
      url: "https://github.com/ParkSooGyeong",
      filter: ["FRONTEND"],
    },
    {
      src: "/images/pot3.png",
      alt: "Portfolio 3",
      title: "Timestamp Camera",
      description: "React Native를 이용한 Timestamp 앱입니다.",
      url: "https://play.google.com/store/apps/details?id=com.h2ofe3636.TimeStemp_Camera&hl=en_GB",
      filter: ["MOBILE"],
    },
    {
      src: "/images/pot4.png",
      alt: "Portfolio 4",
      title: "심플타로",
      description: "React Native를 이용한 타로카드 앱입니다.",
      url: "https://play.google.com/store/apps/details?id=com.h2ofe3636.SimpleTaro&hl=en_GB",
      filter: ["MOBILE"],
    },
    {
      src: "/images/pot5.png",
      alt: "Portfolio 5",
      title: "UserHabit",
      description:
        "데이터 분석 기술력을 바탕으로 모바일 앱 사용자 행동 분석 솔루션을 개발 및 서비스하는 웹입니다.",
      filter: ["FRONTEND", "BACKEND"],
    },
    {
      src: "/images/pot6.png",
      alt: "Portfolio 6",
      title: "Admin Portfolio",
      description: "Next, Typescript, Recoil, Tailwind을 사용한 어드민 템플릿입니다.",
      url: "https://github.com/ParkSooGyeong",
      filter: ["FRONTEND"],
    },
  ];

  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === "ALL" ? true : item.filter.includes(activeFilter)
  );

  const column1 = filteredItems.filter((_, index) => index % 3 === 0);
  const column2 = filteredItems.filter((_, index) => index % 3 === 1);
  const column3 = filteredItems.filter((_, index) => index % 3 === 2);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="container mx-auto p-8">
        <div className="page-heading">
          <span className="icon text-4xl">
            <i className="lnr lnr-license"></i>
          </span>
          <h2>Portfolio.</h2>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <div className="flex border-2 border-dashed border-gray-400 rounded-full p-1">
            <button
              onClick={() => handleFilterClick("ALL")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "ALL"
                  ? "bg-blue-400 text-white"
                  : "text-gray-300 hover:text-blue-400 transition"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => handleFilterClick("FRONTEND")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "FRONTEND"
                  ? "bg-blue-400 text-white"
                  : "text-gray-300 hover:text-blue-400 transition"
              }`}
            >
              FRONTEND
            </button>
            <button
              onClick={() => handleFilterClick("BACKEND")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "BACKEND"
                  ? "bg-blue-400 text-white"
                  : "text-gray-300 hover:text-blue-400 transition"
              }`}
            >
              BACKEND
            </button>
            <button
              onClick={() => handleFilterClick("MOBILE")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "MOBILE"
                  ? "bg-blue-400 text-white"
                  : "text-gray-300 hover:text-blue-400 transition"
              }`}
            >
              MOBILE
            </button>
          </div>
        </div>

        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-4">
              <AnimatePresence>
                {column1.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      width={300}
                      height={index % 2 === 0 ? 200 : 250}
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-lg"></div>

                    <div className="absolute left-4 bottom-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 text-white text-2xl font-bold">
                      {item.title}
                    </div>

                    <div className="absolute left-4 top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 text-white text-lg">
                      {item.description}
                    </div>

                    {item.url && (
                      <a
                        href={item.url}
                        className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500"
                      >
                        <FaArrowRight className="text-white text-2xl" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {column2.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      width={300}
                      height={index % 2 === 0 ? 200 : 250}
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-lg"></div>

                    <div className="absolute left-4 bottom-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 text-white text-2xl font-bold">
                      {item.title}
                    </div>

                    <div className="absolute left-4 top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 text-white text-lg">
                      {item.description}
                    </div>

                    {item.url && (
                      <a
                        href={item.url}
                        className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500"
                      >
                        <FaArrowRight className="text-white text-2xl" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {column3.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      width={300}
                      height={index % 2 === 0 ? 200 : 250}
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-lg"></div>

                    <div className="absolute left-4 bottom-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 text-white text-2xl font-bold">
                      {item.title}
                    </div>

                    <div className="absolute left-4 top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 text-white text-lg">
                      {item.description}
                    </div>

                    {item.url && (
                      <a
                        href={item.url}
                        className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-500"
                      >
                        <FaArrowRight className="text-white text-2xl" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
