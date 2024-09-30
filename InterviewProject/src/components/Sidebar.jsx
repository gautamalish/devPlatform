import React from "react";
import Logo from "../images/Logo.svg";
import HomeIcon from "../images/HomeOutline.svg";
import SearchOutline from "../images/SearchOutline.svg";
import Members from "../images/Members.svg";
import Summary from "../images/Summary.svg";
const Sidebar = () => {
  return (
    <main className="w-2/12 h-screen bg-gray-50 pt-7 px-3">
      <div className="flex flex-row  justify-center  gap-3">
        <img src={Logo} alt="logo" className="w-8 h-fit" />
        <p className="text-xl">Calender</p>
      </div>
      <section className="mt-16 flex flex-col gap-3">
        <div className="flex  py-2 px-2 rounded-md items-center gap-1">
          <img src={HomeIcon} alt="home" />
          <p>Home</p>
        </div>
        <div className="flex  py-2 px-2 rounded-md items-center gap-1">
          <img src={SearchOutline} alt="home" />
          <p>Search</p>
        </div>
        <div className="flex  py-2 px-2 rounded-md items-center bg-green-200 gap-1">
          <img src={Members} alt="home" />
          <p>Members</p>
        </div>
        <div className="flex  py-2 px-2 rounded-md items-center gap-1">
          <img src={HomeIcon} alt="home" />
          <p>Import/Export</p>
        </div>
        <div className="flex  py-2 px-2 rounded-md items-center gap-1">
          <img src={Summary} alt="home" />
          <p>Summary</p>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
