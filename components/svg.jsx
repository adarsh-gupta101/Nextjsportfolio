import React from "react";
import Image from "next/image";
import mobile from "../public/mobile.svg";
import website from "../public/website.svg";
function Svg() {
  return (
    <div className='bg-purple-500  sm:pt-12 md:pt-16 md:pb-24 m-2 rounded-xl'>
      <p className='text-center text-2xl text-white font-bold'>
        Hi I&apos;m Adarsh.Good to see you Here.
      </p>
      <div className='text-center sm:w-72 md:w-3/5 m-auto mt-4'>
        <p className='text-white  text-center text-xl  '>
          Since the beginning of my journey as a freelance developer, I have
          done remote works for startups, agencies, and many other people. I
          love to give life to digital products and this is the way I express
          myself and I love what I do
        </p>
      </div>
      <div className='flex relative sm:w-full md:w-1/2 m-auto pb-12'>
        <Image src={mobile} className=' absolute w-64' alt='' />
        <Image src={website} className=' absolute sm:w-4/5' alt='' />
      </div>
    </div>
  );
}

export default Svg;
