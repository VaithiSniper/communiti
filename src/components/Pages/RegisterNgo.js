"use client";

import React from "react";
import sendNotification from "../../../interfaces/SendPush";
import { useState } from "react";


import { useRouter } from "next/navigation";

import axios from "axios";
import Datepicker from "../UI/Datepicker";
import { useAccount } from "wagmi";

export default function Register() {
  const { address } = useAccount();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  // const [network, setNetwork] = useState("");

  // useEffect(() => {
  //   const getandsetNetwork = async () => {
  //     const res = await axios.get(`/api/networks/getEnumMapping?index=2`);
  //     console.log(res.status);
  //   };
  //   getandsetNetwork();
  // }, [network]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    router.push('/ngo')
  }

  return (
    <>
      <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
        <form
          onSubmit={handleSubmit}
          className='space-y-6 '
          action='#'>
          <h5 className='text-2xl font-space text-gray-900 dark:text-white'>
            Please enter your details
          </h5>
          <div>
            <label
              htmlFor='name'
              className='block mb-2 text-base font-space text-gray-900 dark:text-white'>
              Your name
            </label>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              id='location'
              className='bg-gray-50 border border-gray-300 placeholder:font-space	 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5'
              placeholder='Chuck Norris'
              required
            />
          </div>
          <div>
            <label
              htmlFor='location'
              className='block mb-2 text-base font-space text-gray-900 dark:text-white'>
              Your genre
            </label>
            <input
              type='text'
              name='location'
              id='password'
              onChange={handleChange}
              placeholder='Comedy'
              className='bg-gray-50 border border-gray-300 placeholder:font-space text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required
            />
          </div>
          <button
            onClick={handleClick}
            className='w-full text-white bg-yellow-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-space rounded-lg text-xl px-5 py-2.5 text-center '>
            Add
          </button>
        </form>
      </div>
    </>
  );
}
