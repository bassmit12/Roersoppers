"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow" : "bg-transparent"}`}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Roersoppers-t4gekyM7SINMMpk9V8Uo3i0fPtNKxr.png"
              alt="Roersoppers Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="/training"
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Training
            </Link>
            <Link
              href="/wedstrijden"
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Wedstrijden
            </Link>
            <Link
              href="/nieuws"
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Nieuws
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Contact
            </Link>
            <Button
              className={`px-6 py-3 text-base font-semibold ${
                isScrolled
                  ? "bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]"
                  : "bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]"
              } transition-colors`}
            >
              Word Lid
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X
                className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/training"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Training
              </Link>
              <Link
                href="/wedstrijden"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Wedstrijden
              </Link>
              <Link
                href="/nieuws"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Nieuws
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full px-6 py-3 text-base font-semibold bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]">
                Word Lid
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
