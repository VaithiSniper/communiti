"use client"
import { useState } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import axios from "axios";

export default function Login(props) {


  // const [WLDButtonText, setWLDButtonText] = useState("Login")

  const [type, setType] = useState("volunteer");
  const router = useRouter();
  const { user, error: error1, isLoading: isLoading1 } = useUser();


  // if (error1) {
  //   setWLDButtonText("Connection failed...")
  //   throw new Error("Couldn't connect")
  // }

  // if (isLoading1) {
  //   setWLDButtonText("Connecting...")
  // }

  // if (user) {
  //   console.log(user.name);
  //   // router.push(`/${type}`)
  // }

  // chain info
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  // router obj
  const selectedTypeStyles =
    "p-4 m-2 text-white text-xl rounded w-full transition duration-500 ease-in-out  ";

  const { address, isConnected } = useAccount();

  const verifyChains = () => {
    if (type === "volunteer" && chain.network !== "maticmum") {
      // switch to mumbai
      switchNetwork?.(80001);
    }
  };



  const handleAuthProceed = () => {

    if (type === "volunteer") {
      if (type === "volunteer") {
        router.push('/volunteer')
      }
      else {
        router.push('/ngo')
      }

    }
  }
  const handleProceed = async () => {
    // verify if volunteer is on mumbai, if NGO is not on mumbai
    verifyChains();
    const res = await axios.get(
      `/api/authUserOrNGO?network=${chain.network}&address=${address}&type=${type}`
    );
    const authStatus = res.data.status;
    if (type === "volunteer") {
      if (authStatus === true) {
        router.push("/volunteer");
      } else {
        router.push("/onboarding/volunteer");
      }
    } else if (type === "ngo") {
      if (authStatus === true) {
        router.push("/ngo");
      } else {
        router.push("/onboarding/ngo");
      }
    }
  };

  return (
    <div className='flex flex-col justify-center space-y-8 items-center text-white'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-black'>
        <div className='px-6 py-4 flex flex-col justify-center relative'>
          <div className='container mb-2 flex flex-col items-center py-3 gap-y-2 space-y-4'>
            <div>
              <span className='font-bold font-heading text-4xl'>Join Us</span>
            </div>
            <div>
              <p className='container font-light font-crimson text-xl text-center '>
                Let's decentralize the{" "}
                <span className='text-yellow-100 font-semibold italic'>communiti</span>
              </p>
            </div>
            <div className='flex items-center border border-gray-200 rounded-xl w-full text-center'>
              <button
                id='bordered-radio-1'
                value='volunteer'
                name='type'
                onClick={() => {
                  setType("volunteer");
                }}
                className={
                  selectedTypeStyles +
                  "bg-yellow-500"
                }>
                Creator
              </button>
              |
              <button
                id='bordered-radio-1'
                value='ngo'
                name='type'
                onClick={() => {
                  setType("ngo");
                }}
                className={
                  selectedTypeStyles + (type === "ngo" ? "bg-amber-500" : null)
                }>
                Subscriber
              </button>
            </div>
            <ConnectButton
              accountStatus='address'
              chainStatus='name'
            />
            <button
              type='button'
              onClick={handleAuthProceed}
              class='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>
              <a href='/api/auth/login'>Login</a>
            </button>

            {address && isConnected && (
              <button
                id='bordered-radio-1'
                onClick={handleProceed}
                className={
                  selectedTypeStyles +
                  (type === "ngo" ? "bg-amber-500" : "bg-purple-500")
                }>
                Proceed{" "}
                {isLoading && pendingChainId === 80001 && " (switching)"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}
