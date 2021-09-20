import React from "react";

function Newbid() {
  return (
    <div className='-mb-20' style={{ zIndex: 1000 }}>
      <div className='bg-gray-800 md:flex p-12 justify-evenly items-center h-72  md:h-36 w-4/5 m-auto mb-12 rounded-xl z-50'>
        <p className='text-white font-bold text-3xl m-2'>Start a new project</p>
        <p className='text-white'>Are you interested in working together?</p>
        <p className='text-purple-200 border-2 rounded-3xl border-white p-3 px-4 text-center hover:bg-purple-500 hover:border-purple-500 hover:text-white transisition delay:75 duration-200 ease-in-out'>
          <a href='mailto:adarshgupta2468@gmail.com'> Lets do this</a>
        </p>
      </div>
      <div
        className='w-full bg-purple-500 h-64  -mt-24 relative '
        style={{ zIndex: -1 }}></div>
    </div>
  );
}

export default Newbid;
