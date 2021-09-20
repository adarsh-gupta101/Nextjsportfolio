import React from "react";
import Image from "next/image";
import mobileapp from "/public/mobileapp.svg";
import website from "/public/websiteapp.svg";
import server from "/public/backend.svg";

function skillset() {
  return (
    <div className='sm:block -mt-8 md:-mt-24  w-5/6  md:flex  sm:w-5/6 m-auto px-2 py-8 justify-center bg-white border-2 rounded-xl border-purple-200 '>
      <div className=' border-b-2  sm:border-b-2 md:border-r-2 md:border-b-0 border-gray-200'>
        <div className='w-32 m-auto  '>
          <Image src={mobileapp} className='' alt='' />
        </div>
        <p className='text-purple-900 text-2xl sm:text-xl font-bold  text-center'>
          {" "}
          App Development
        </p>
        <div className='w-72 my-4'>
          <p className='text-center sm:text-center text-xl md:text-base'>
            Mobile design to Mobile app is like skelton to life and I love the
            process.I can create both IOS and Android applications
          </p>
        </div>
        <div className='my-8'>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            Framework I use:
          </p>
          <p className=' text-center'>React Native</p>
        </div>
        <div className='my-8'>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            App dev Tools:
          </p>
          <ul className=' text-center'>
            <li>Expo</li>
            <li>Android Studio</li>
            <li>Tailwind css</li>
            <li>Vector Icons</li>
          </ul>
        </div>
      </div>
      <div className='mt-4 sm:mt-0 sm:border-b-2 md:border-r-2 md:border-b-0 '>
        <div className='w-64 m-auto'>
          <Image src={website} className='w-64' alt='' />
        </div>
        <p className='text-purple-900 font-bold  text-center text-2xl sm:text-xl'>
          {" "}
          Front-End Development{" "}
        </p>
        <p className='my-8 w-72  text-center'>
          I like to code things from scratch and loves to develop ideas into a
          website.I can create responsive webpage and web-application
        </p>
        <div className='my-8'>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            Languages I speak
          </p>
          <p className=' text-center'>HTML,CSS,JavaScript,Python</p>
        </div>
        <div className='my-8'>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            Frameworks I use
          </p>
          <p className='text-center'> Next JS</p>
          <p className=' text-center'>React JS</p>
        </div>
        <div>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            {" "}
            Tools I use
          </p>
          <ul className=' text-center'>
            <li>VS Code</li>
            <li>Tailwind css</li>
            <li>Developer Tools</li>
            <li>Material UI</li>
            <li>Codepen </li>
            <li>Github</li>
            <li>Unsplash</li>
          </ul>
        </div>
      </div>
      <div className=''>
        <div className='w-48 m-auto'>
          <Image src={server} className='w-64' alt='' />
        </div>
        <p className='text-purple-900 font-bold  text-center text-2xl sm:text-xl'>
          {" "}
          Back-End Development
        </p>
        <p className='my-8 w-72  text-center'>
          I love to communicate with servers and knows how to make my frontend
          communicate with my backend using my best friend API
        </p>
        <div className='my-8'>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            Framework I use
          </p>
          <p className=' text-center'>Express JS</p>
        </div>
        <div className='my-8'>
          <p className='text-purple-500 font-bold  text-center text-2xl sm:text-xl'>
            Backend Tools
          </p>
          <ul className=' text-center'>
            <li>Node Js</li>
            <li>Firebase</li>
            <li> MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default skillset;
