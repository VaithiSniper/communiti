"use client";

import React from "react";
import Image from "next/image";
import LandingCard from "@/components/UI/LandingCard";


import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import NavBar from "@/components/UI/NavBar";


export default function Page() {
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  return (
    <>

      <div className='text-banner h-full w-full leading-tight tracking-tight text-center mt-10  font-front z-30 text-white bg-opacity-50'>
        <div className='inline mr-10 font-extrabold text-6xl'>Welcome, {user ? user.name : "Anon"}</div>
        <div className='inline'><button
          type='button'
          onClick={() => router.push('/')}
          className='text-base items-center my-20 text-white p-4 transition ease-in duration-200 font-extralight uppercase font-crimson font-s rounded-full hover:bg-amber-600 hover:text-white border-2 border-amber-900 focus:outline-none bg-grey'>
          <Link href='/api/auth/logout' onClick={() => router.push('/')}>Logout</Link>
        </button>
        </div>
      </div>

      <div className='bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row justify-around items-center mb-10 mt-10'>
        <LandingCard
          title='Launch Announcement!!!'
          description='Sit fugiat duis magna exercitation. Dolore veniam aliqua reprehenderit in reprehenderit exercitation pariatur et culpa est deserunt. Laboris et elit ea minim cillum sint.'
          image='/ngo-signup.png'
          button='Dashboard'
          actionRoute='/volunteer/dashboard'
        />
        <LandingCard
          title='FUTURE PROJECT UDPATE'
          description='Sit fugiat duis magna exercitation. Dolore veniam aliqua reprehenderit in reprehenderit exercitation pariatur et culpa est deserunt. Laboris et elit ea minim cillum sint.'
          image='/ngo-dashboard.png'
          button='View'
          actionRoute='/volunteer/marketplace'
        />
      </div>
    </>
  );
}
