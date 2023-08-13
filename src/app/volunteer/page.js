"use client";

import React from "react";
import Image from "next/image";
import LandingCard from "@/components/UI/LandingCard";


import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";


export default function Page() {
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  return (
    <>
      <div className='text-banner h-full w-full leading-tight tracking-tight text-center mt-10 font-extrabold font-space z-30 text-white bg-opacity-50'>
        Welcome , Volunteer , {user.name}
        <button
          type='button'
          onClick={() => router.push('/')}
          className='flex items-center text-white p-4 transition ease-in duration-200 font-extralight uppercase rounded-full hover:bg-amber-600 hover:text-white border-2 border-amber-900 focus:outline-none bg-grey'>
          <Link href='/api/auth/logout' onClick={() => router.push('/')}>Logout</Link>
        </button>
      </div>

      <div className='flex flex-row justify-around items-center mb-10 mt-10'>
        <LandingCard
          title='View your activities'
          description='Sit fugiat duis magna exercitation. Dolore veniam aliqua reprehenderit in reprehenderit exercitation pariatur et culpa est deserunt. Laboris et elit ea minim cillum sint.'
          image='/ngo-signup.png'
          button='Dashboard'
          actionRoute='/volunteer/dashboard'
        />
        <LandingCard
          title='View all the activities'
          description='Sit fugiat duis magna exercitation. Dolore veniam aliqua reprehenderit in reprehenderit exercitation pariatur et culpa est deserunt. Laboris et elit ea minim cillum sint.'
          image='/ngo-dashboard.png'
          button='View'
          actionRoute='/volunteer/marketplace'
        />
      </div>
    </>
  );
}
