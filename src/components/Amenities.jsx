import React from "react";
import { FaWifi, FaUtensils, FaBed, FaCar } from "react-icons/fa";
import { MdStoreMallDirectory } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { BsWater } from "react-icons/bs";
import { IoIosWater } from "react-icons/io";
import { GrYoga } from "react-icons/gr";
import { LuHeater } from "react-icons/lu";
import { LuPartyPopper } from "react-icons/lu";
import { FaSwimmingPool } from "react-icons/fa";
import { IoMdBonfire } from "react-icons/io";

const Amenities = () => {
  return (
    <section id="amenities" className="bg-[#faf6f1] py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4"><FaWifi className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">WiFi Available</span></div>
          <div className="flex items-center space-x-4"><FaUtensils className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Functional Kitchen</span></div>
          <div className="flex items-center space-x-4"><FaBed className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Attached Washrooms</span></div>
          <div className="flex items-center space-x-4"><FaMountainSun className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Mountain View</span></div>
          <div className="flex items-center space-x-4"><FaCar className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Car Parking</span></div>
          <div className="flex items-center space-x-4"><MdStoreMallDirectory className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Near Market</span></div>
          <div className="flex items-center space-x-4"><MdForest className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Green Forest</span></div>
          <div className="flex items-center space-x-4"><FaHouseChimney className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Daily Housekeeping</span></div>
          <div className="flex items-center space-x-4"><BsWater className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Hot Geysers</span></div>
          <div className="flex items-center space-x-4"><GrYoga className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Yoga Terrace</span></div>
          <div className="flex items-center space-x-4"><LuHeater className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Electric Kettle</span></div>
          <div className="flex items-center space-x-4"><IoIosWater className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Water Purifier</span></div>
          <div className="flex items-center space-x-4"><LuPartyPopper className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Party Hall</span></div>
          <div className="flex items-center space-x-4"><FaSwimmingPool className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Swimming Pool</span></div>
          <div className="flex items-center space-x-4"><IoMdBonfire className="text-tan text-3xl" /><span className="text-lg font-medium text-ebony">Bonfire BBQ</span></div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
