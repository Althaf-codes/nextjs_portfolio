"use client";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import React, { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = useCallback(() => {
    setIsSheetOpen(false);
  }, []);

  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  return (
    // <nav className="fixed w-full backdrop-blur-md bg-white/30 dark:bg-black/30 z-50">
    <nav className="fixed w-full h-16 top-0 bg-background/40 border-b-white/40 px-8 backdrop-blur flex items-center justify-between z-50  text-white">
      <LoadingBar
        color="#00FF00"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* <div className="container mx-auto px-4 py-3 flex justify-between items-center"> */}
      {/* <Link href="/" className="text-2xl font-bold">
          My PortFolio
        </Link> */}
      <div className="text-lg font-bold md:text-xl items-center py-4 ">
        <Link href={"/"}>PortFolio</Link>
      </div>

      {/* <div className="flex items-center space-x-4"> */}
      {/* <Link href="/" className="hover:text-green-500 transition">Home</Link>
          <Link href="/projects" className="hover:text-green-500 transition">Projects</Link>
          <Link href="/blog" className="hover:text-green-500 transition">Blog</Link>
          <Link href="/about" className="hover:text-green-500 transition">About</Link>
          <Link href="/contact" className="hover:text-green-500 transition">Contact</Link> */}
      {/* </div> */}

      <ul className="hidden md:flex w-full justify-end items-center space-x-4 ">
        <li>
          {" "}
          <Link className="hover:text-green-500 transition" href={"/"}>
            Home
          </Link>
        </li>
        <div className="w-0"></div>
        <li>
          {" "}
          <Link className="hover:text-green-500 transition" href={"/project"}>
            Project
          </Link>
        </li>
        <div className="w-0"></div>

        <li>
          {" "}
          <Link className="hover:text-green-500 transition" href={"/blog"}>
            Blog
          </Link>
        </li>
        <div className="w-0"></div>

        <li>
          {" "}
          <Link className="hover:text-green-500 transition" href={"/about"}>
            About
          </Link>
        </li>
        <div className="w-0"></div>

        <Link
          href="/contact"
          className={`${buttonVariants({
            variant: "outline",
          })} hover:bg-green-600 hover:border-green-600 hover:text-white transition-all`}
        >
          Contact Me
        </Link>

        <div className="w--0"></div>
      </ul>

      <div className="horizontalgap w-2"></div>

      <div className="flex  gap-2 items-center ml-auto">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button>
              <HamburgerMenuIcon className="md:hidden size-7" />
            </button>
          </SheetTrigger>
          <SheetContent className="text-white">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href="/" onClick={closeSheet}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeSheet}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeSheet}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeSheet}>
                  Contact
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
