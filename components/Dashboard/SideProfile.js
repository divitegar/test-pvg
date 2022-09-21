import Image from "next/image";
import React from "react";
import { ArrowDown, MoreLine } from "../icons";

export default function SideProfile() {
  return (
    <div>
      <div className="pt-10">
        <div className="flex justify-center items-center">
          <div className="border-4 border-primary-60 p-1 rounded-full">
            <img
              src="/img/profile.png"
              width={50}
              height={50}
              className="rounded-full bg-[#FFA800]"
              alt="profile"
            />
          </div>
          <div className="ml-2">
            <h4 className="text-dark-10">Budi Budiman</h4>
            <p className="text-dark-20">Owner at PT Suka Maju</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      <div className="pt-12 px-8">
        <div className="rounded-xl bg-white w-full pt-4 pb-6">
          <div className="flex justify-between px-6">
            <div />
            <h4 className="text-dark-20">Total balance</h4>
            <div>
              <MoreLine />
            </div>
          </div>
          <div className="pt-6 px-8">
            <p className="text-black font-bold text-xl">Rp 1.580.000.000</p>
          </div>
          <div className="pt-6 px-8">
            <button
              type="button"
              className="bg-primary-100 text-white w-full p-4 font-bold text-lg rounded-xl"
            >
              Top Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
