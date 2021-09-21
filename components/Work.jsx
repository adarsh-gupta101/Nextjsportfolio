import React from "react";
import fot from "../public/fot.jpg";
import fotal from "../public/fot2.jpg";

import netflix from "../public/netflix.jpg";
import amazon from "../public/amazon.jpg";
import tesla from "../public/tesla.jpg";
import airbnb from "../public/airbnb.jpg";

import Image from "next/image";

function Work() {
  return (
    {
      /* <div class='w-full'>
      <p class='text-center font-bold text-2xl'>My Works</p>
      <p class='text-center'>
        Here are few works I done as a freelancer and also for learning
      </p>
      <div class='flex-column md:flex flex-wrap justify-center items-center'>
        <div className='hoverable ' class='relative  m-4'>
          <div class='group w-5/6 sm:w-1/3  h-64 flex justify-center  shadow-2xl hover:opacity-95 '>
            <Image src={fot} class='object-contain' />
            <Image src={fotal} class='object-contain' />
            <div class='absolute w-5/6  sm:w-1/3 text-center flex justify-center items-center'>
              <p class='text-white text-sm md:text-2xl h-64 text-opacity-0 p-8 opacity-0 group-hover:text-opacity-100 group-hover:opacity-100 bg-blue-800'>
                <span class='font-bold bg-white text-blue-500 p-2 px-4 my-4 rounded-2xl'>
                  {" "}
                  Fot
                </span>
                <br />
                Fantasy of talents is a platform for content-creators, artists,
                photographers where they can share thier art and win amazing
                prices.
              </p>
            </div>
          </div>
        </div>
        <div className='hoverable ' class='relative  m-4'>
          <div class='group w-5/6 sm:w-1/3  h-64 flex justify-center  shadow-2xl hover:opacity-95 '>
            <Image src={fot} class='object-contain' />
            <Image src={fotal} class='object-contain' />
            <div class='absolute w-5/6  sm:w-1/3 text-center flex justify-center items-center'>
              <p class='text-white text-sm md:text-2xl h-64 text-opacity-0 p-8 opacity-0 group-hover:text-opacity-100 group-hover:opacity-100 bg-blue-800'>
                <span class='font-bold bg-white text-blue-500 p-2 px-4 my-4 rounded-2xl'>
                  {" "}
                  Fot
                </span>
                <br />
                Fantasy of talents is a platform for content-creators, artists,
                photographers where they can share thier art and win amazing
                prices.
              </p>
            </div>
          </div>
        </div>
        <div class='w-5/6 sm:w-1/3 m-auto h-64 flex'>
          <Image src={netflix} class='object-contain' />
        </div>
        <div class='w-5/6 sm:w-1/3 m-auto h-64 flex'>
          <Image src={tesla} class='object-contain' />
        </div>
        <div class='w-5/6 sm:w-1/3 m-auto h-64 flex'>
          <Image src={amazon} class='object-contain' />
        </div>
        <div class='w-5/6 sm:w-1/3 m-auto h-64 flex'>
          <Image src={airbnb} class='object-contain' />
        </div>
      </div>
    </div> */
    },
    (
      <div>
        <p className='text-center font-bold text-3xl mt-8 text-purple-500'>
          My Works
        </p>
        <p className='text-center text-gray-600 text-xl'>
          Here are few works that I have done as a freelancer and also for
          learning
        </p>

        <div className='flex justify-center items-center flex-wrap'>
          <div className='group w-5/6 sm:w-1/3 m-4 h-64 flex shadow-2xl'>
            <Image src={fot} className='object-contain' alt='' />
            <Image src={fotal} className='object-contain' alt='' />
            <div className='absolute w-5/6  sm:w-1/3 text-center flex justify-center items-center '>
              <span className='text-white sm:text-xl h-64 text-opacity-0 p-8 opacity-0 group-hover:text-opacity-100 group-hover:opacity-100 bg-blue-800 transition delay-150 duration-500 ease-in'>
                <p className='font-bold border-2  text-white p-1 px-4 my-4 rounded-2xl'>
                  {" "}
                  Fot
                </p>
                <br />
                Fantasy of talents is a platform for content-creators, artists,
                photographers where they can share thier art and win amazing
                prices.
              </span>
            </div>
          </div>
          <div className='group w-5/6 sm:w-1/3 m-4 h-64 flex shadow-2xl'>
            <Image src={netflix} className='object-contain' alt='' />
            <div className='absolute w-5/6  sm:w-1/3 text-center flex justify-center items-center'>
              <span className='relative text-white text-sm md:text-xl  h-64 text-opacity-0 p-8 pt-10 opacity-0  group-hover:text-opacity-100 group-hover:opacity-100 bg-blue-800 transition delay-150 duration-500 ease-in'>
                <p className='font-bold border-2 border-white  p-1   rounded-2xl text-white'>
                  {" "}
                  Netflix UI
                </p>
                <br />
                <p className=' '>
                  Netflix UI created using React JS. Imdb API is used for movie
                  details{" "}
                </p>
                <button className='m-2 bg-white text-blue-500 p-1 px-3 rounded-3xl  hover:text-white hover:bg-blue-700'>
                  <a href='https://netfix-clone-reactjs.web.app/'>Live Link</a>
                </button>
                <button className='m-2 bg-white text-blue-500 p-1 px-3 rounded-3xl hover:text-white hover:bg-blue-700'>
                  <a href='https://github.com/adarsh-gupta101/netflixclone-'>
                    {" "}
                    Repo
                  </a>
                </button>
              </span>
            </div>
          </div>
          <div className='group w-5/6 sm:w-1/3 m-4 h-64 flex shadow-2xl'>
            <Image src={tesla} className='object-contain' alt='' />
            <div className='absolute w-5/6  sm:w-1/3 text-center flex justify-center items-center'>
              <span className='relative text-white text-sm md:text-xl  h-64 text-opacity-0 p-8 pt-10 opacity-0  group-hover:text-opacity-100 group-hover:opacity-100 bg-blue-800 transition delay-150 duration-500 ease-in'>
                <p className='font-bold border-2 border-white  p-1   rounded-2xl text-white'>
                  {" "}
                  Tesla UI
                </p>
                <br />
                <p className=' '>
                  Tesla UI created using React JS. Source code available at
                  github{" "}
                </p>
                <button className='m-2 bg-white text-blue-500 p-1 px-3 rounded-3xl  hover:text-white hover:bg-blue-700'>
                  <a href='https://teslareactclone.herokuapp.com/'>Live Link</a>
                </button>
                <button className='m-2 bg-white text-blue-500 p-1 px-3 rounded-3xl hover:text-white hover:bg-blue-700'>
                  <a href='https://github.com/adarsh-gupta101/'>
                    {" "}
                    Repo
                  </a>
                </button>
              </span>
            </div>
          </div>

          <div className='w-5/6 sm:w-1/3 m-4 h-64 flex shadow-2xl'>
            <Image src={amazon} className='object-contain' alt='image' />
          </div>
          <div className='w-5/6 sm:w-1/3 m-4 h-64 flex shadow-2xl'>
            <Image src={airbnb} className='object-contain' alt='image' />
          </div>
        </div>
      </div>
    )
  );
}

export default Work;
