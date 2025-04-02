"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const NavLinks = [
  { title: "ГОЛОВНА", href: "/" },
  { title: "ПРАВИЛА", href: "/rules" },
  { title: "ІСТОРІЯ", href: "/history" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const serverImages = ["/images/server1.jpg", "/images/server2.jpg", "/images/server3.jpg"];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("play.nulifie.xyz");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev: number) => (prev + 1) % serverImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev: number) => (prev - 1 + serverImages.length) % serverImages.length);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-48 h-16">
              <Image
                src={serverImages[currentImageIndex]}
                alt="Nulifie Server"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="nav-item text-lg">
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-xl glassmorphism-light btn-gradient hover:opacity-90 hover:scale-[1.02] transition-all duration-300 hidden md:flex text-lg px-8" asChild>
              <span>Почати грати</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="glassmorphism border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-xl text-center text-gradient">Підключення до серверу</DialogTitle>
              <DialogDescription className="text-center text-gray-300 pt-2">
                Використовуйте цю IP-адресу для підключення
              </DialogDescription>
            </DialogHeader>
            <div className="p-4 bg-black/30 rounded-md text-center my-4 relative group">
              <p className="text-xl font-mono font-bold text-white">play.nulifie.xyz</p>
              <button
                onClick={copyToClipboard}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
              >
                {isCopied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto py-4 space-y-4">
            {NavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block px-4 py-3 text-xl hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="px-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full rounded-xl glassmorphism-light btn-gradient hover:opacity-90 hover:scale-[1.02] transition-all duration-300 text-lg py-6" asChild>
                    <span>Почати грати</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="glassmorphism border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-center text-gradient">Підключення до серверу</DialogTitle>
                    <DialogDescription className="text-center text-gray-300 pt-2">
                      Використовуйте цю IP-адресу для підключення
                    </DialogDescription>
                  </DialogHeader>
                  <div className="p-4 bg-black/30 rounded-md text-center my-4 relative group">
                    <p className="text-xl font-mono font-bold text-white">play.nulifie.xyz</p>
                    <button
                      onClick={copyToClipboard}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      {isCopied ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
