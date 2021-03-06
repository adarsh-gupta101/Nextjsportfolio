import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navigationbar from "../components/navigationbar";
import Newbid from "../components/Newbid";
import Skillset from "../components/skillset";
import Svg from "../components/svg";
import Work from "../components/Work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adarsh || Web developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/Adarsh.png' />
      </Head>
      <Navigationbar />
      <Banner />
      <Svg />
      <Skillset />
      <Work />
      <Newbid />
      <Footer />
    </div>
  );
}
