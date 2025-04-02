"use client"

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const serverImages = [
  "/icons/2025-03-09_19.53.17.png",
  "/icons/2025-03-09_15.53.30.png",
  "/icons/2025-02-28_19.30.53.png",
  "/icons/2025-02-15_17.53.09.png",
  "/icons/2025-02-15_17.52.04.png",
  "/icons/2025-02-03_22.46.51.png",
  "/icons/2025-01-31_12.53.21.png",
  "/icons/2025-01-23_00.26.52.png",
  "/icons/2024-12-24_17.27.41.png",
  "/icons/2024-12-24_15.13.46.png",
  "/icons/2024-12-06_20.54.50.png",
  "/icons/2024-09-30_22.13.44.png",
  "/icons/2024-09-13_20.16.50.png",
  "/icons/2024-09-13_20.16.33.png",
  "/icons/2024-08-15_19.44.10.png",
  "/icons/2024-08-15_19.39.57.png",
  "/icons/2024-08-15_19.34.30.png",
  "/icons/2024-08-15_19.11.50.png",
  "/icons/2024-08-15_18.56.12.png"
];

export default function HeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % serverImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + serverImages.length) % serverImages.length);
  };

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1018]/50 to-black/70 -z-10" />

      {/* Content container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-white">НУЛІФАЙ</span>{" "}
            <span className="text-gradient">1.21.3+</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Сервер середньовічного РП та ворлдбілдінгу в світі Екзайл.
            Кастомні механіки ковальства, магії, міст та війн чекають на тебе!
          </p>
          <div className="flex flex-wrap gap-4">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="btn-gradient rounded-xl text-lg font-medium px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Почати грати
                </Button>
              </DialogTrigger>
              <DialogContent className="glassmorphism border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-xl text-center text-gradient">Підключення до серверу</DialogTitle>
                  <DialogDescription className="text-center text-gray-300 pt-2">
                    Використовуйте цю IP-адресу для підключення
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4 bg-black/30 rounded-md text-center my-4">
                  <p className="text-xl font-mono font-bold text-white">play.nulifie.xyz</p>
                </div>
                <div className="text-center space-y-4">
                  <p className="text-gray-300">Щоб отримати доступ до сервера, вам потрібно подати заявку:</p>
                  <Button asChild className="w-full">
                    <Link href="https://form.jotform.com/242587274838370" target="_blank">
                      Заповнити форму для вайтлисту
                    </Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl bg-white/5 backdrop-blur-sm border-white/10 text-lg font-medium px-8 py-6 hover:bg-white/10 transition-all duration-300"
              asChild
            >
              <Link href="https://t.me/nulifie" target="_blank">Детальніше</Link>
            </Button>
          </div>
        </div>

        {/* Right content - Server Image */}
        <div className="relative">
          <div className="glassmorphism rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] relative">
              <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                <Image
                  src={serverImages[currentImageIndex]}
                  alt="Nulifie Minecraft Server"
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Navigation arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button 
                  onClick={prevImage}
                  className="glassmorphism-light p-2 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="glassmorphism-light p-2 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="glassmorphism-light px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {serverImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
