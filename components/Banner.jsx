import React from "react";
import Typed from "react-typed";
import Image from "next/image";
import prgm from "../public/programming.svg";

function Banner() {
  return (
    <div
      className=' w-full relative  p-4'
      style={{
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "75px",
      }}>
      <p
        className='text-center font-bold text-4xl my-4 text-purple-500'
        style={{ fontFamily: "popins auto" }}>
        <Typed
          strings={[
            "Front-end Developer.",
            "Backend Developer.",
            "App Developer.",
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
      </p>
      <p className='text-center text-2xl text-gray-500'>
        I develop good looking web and mobile applications
      </p>
      <Image
        src={prgm}
        alt='Picture of the author'
        className='absolute sm:w-full sm:h-full md:w-2/5'
      />
    </div>
  );
}

export default Banner;
