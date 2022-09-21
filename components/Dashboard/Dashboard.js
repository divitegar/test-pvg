import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import SideProfile from "./SideProfile";
import { HiMenu, HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <div className="bg-white shadow-lg w-full h-16 block xl:hidden">
        <div className="flex justify-between items-center h-full px-8">
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="cursor-pointer"
          >
            {showSidebar ? <HiMenuAlt2 /> : <HiMenu />}
          </div>
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="cursor-pointer"
          >
            {showProfile ? <HiMenuAlt3 /> : <HiMenu />}
          </div>
        </div>
      </div>
      <div className="flex w-full h-full 2xl:h-screen">
        <div className={`${showSidebar && "z-20 absolute w-[70%] h-full"}`}>
          <div
            className={`bg-secondary-20 ${
              showSidebar ? "block" : "hidden"
            } xl:block xl:w-[230px] h-full pt-[45px]`}
          >
            <Sidebar />
          </div>
        </div>
        <Main />
        <div
          className={`${showProfile && "z-20 absolute right-0 w-[90%] h-full"}`}
        >
          <div
            className={`bg-secondary-80 ${
              showProfile ? "block" : "hidden"
            } xl:block xl:w-[300px] h-full pt-[45px]`}
          >
            <SideProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
