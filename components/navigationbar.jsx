import React from "react";

function navigationbar() {
  return (
    <div
      className='flex justify-between mx-16 mt-4
    '>
      <div className='popins  text-purple-500 text-sm md:text-2xl'>
        Hello World
      </div>
      <div className='sm:hidden md:flex  items-center'>
        <p className='hover:text-blue-500 mx-2 text-xl hidden md:block'>
          <a href='https://www.instagram.com/developedbyadarsh'>Mentoring</a>
        </p>
        <p className='text-blue-500 font-bold  border-2 border-blue-500 rounded-3xl p-2 hover:bg-blue-500  hover:text-white transition delay-200 duration-400 ease-in-out'>
          <a href='https://www.instagram.com/developedbyadarsh'> Say Cheese</a>
        </p>
      </div>
    </div>
  );
}

export default navigationbar;
