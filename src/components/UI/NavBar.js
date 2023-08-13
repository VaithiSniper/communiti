"use client";

import Image from "next/image";
import "../../app/globals.css";
import { useState, useEffect } from "react";


export default function NavBar() {

  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <>
      <header className={`w-full fixed flex justify-between ${scrollY > 60 ? 'bg-black transition duration-300 ease-in-out text-ivory' : 'transition  text-pastelBlack duration-300 ease-in-out'} items-center px-4 md:px-12 h-24 z-40`}>
        <a
          href='#'
          className='flex items-center font-front text-xl underline tracking-tight pl-10'>
          communiti
          {/* <Image
            width={200}
            height={500}
            src='/png/logo.png'
            alt='trucause Logo'
          /> */}
        </a>
        <div className='flex mr-10 items-center text-slate-50 font-light text-xl '>
          <a
            href='#'
            className='mr-6  hover:text-slate'>
            About
          </a>
          <a
            href='#'
            className=' hover:text-slate'>
            Login
          </a>
        </div>
      </header>
    </>
  );
}
