import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Icon } from "@mui/material";
function Footer() {
  return (
    <div className=' w-full h-64 bg-purple-500 relative ' style={{ zIndex: 0 }}>
      <p className='text-center mb-8 text-gray-200'>🚀Living and Learning🚀</p>
      <div className='flex justify-center'>
        <div>
          <a href='https://www.facebook.com/adarsh.murali.3979' className='m-2'>
            <FacebookIcon style={{ fontSize: "40px", color: "white" }} />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/developedbyadarsh/'
            className=' m-2'>
            <InstagramIcon style={{ fontSize: "40px", color: "white" }} />
          </a>
        </div>
        <div>
          <a href='https://github.com/adarsh-gupta101/' className=''>
            <GitHubIcon style={{ fontSize: "40px", color: "white" }} />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/adarsh21580302' className='m-2'>
            <TwitterIcon style={{ fontSize: "40px", color: "white" }} />
          </a>
        </div>
        <div>
          <LinkedInIcon style={{ fontSize: "40px", color: "white" }}>
            <a
              href='https://www.linkedin.com/in/adarsh-m-088393168/'
              className='m-2'></a>
          </LinkedInIcon>
        </div>
        <div>
          <a href='mailto:adarshgupta2468@gmail.com' className='m-2'>
            <EmailIcon style={{ fontSize: "40px", color: "white" }} />
          </a>
        </div>
      </div>
      <div>
        <p className='text-center mt-8 text-gray-200'>
          Made by me with{" "}
          <span>
            <a
              href='https://nextjs.org/'
              className='bg-white text-black p-1 rounded-3xl hover:bg-transparent hover:text-white transition delay-75 duration-400 ease-in animate-pulse'>
              NextJs
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
