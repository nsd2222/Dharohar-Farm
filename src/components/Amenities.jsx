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
    <section id="amenities" className="bg-cambridge_blue bg-[#faf6f1] py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-800 text-center mb-8">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <FaWifi className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">WIFI AVAILABLE</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaUtensils className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">FULLY FUNCTIONAL KITCHEN</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaBed className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">BEDROOMS WITH ATTACHED WASHROOMS</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMountainSun className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">SPECTACULAR MOUNTAIN VALLEY VIEW</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaCar className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">CAR PARKING</span>
          </div>
          <div className="flex items-center space-x-4">
            <MdStoreMallDirectory className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">2 KM FROM MAIN MARKET</span>
          </div>
          <div className="flex items-center space-x-4">
            <MdForest className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">SURROUNDED BY LUSH GREEN FOREST</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaHouseChimney className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">HOUSE KEEPING ON DAILY BASIS</span>
          </div>
          <div className="flex items-center space-x-4">
            <BsWater className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">HOT WATER GEYSERS</span>
          </div>
          <div className="flex items-center space-x-4">
            <GrYoga className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">TERRACE FOR YOGA / MEDITATION</span>
          </div>
          <div className="flex items-center space-x-4">
            <LuHeater className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">ELECTRIC KETTLE IN THE ROOM</span>
          </div>
          <div className="flex items-center space-x-4">
            <IoIosWater className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">WATER PURIFIER FOR FILTERED WATER</span>
          </div>
          <div className="flex items-center space-x-4">
            <LuPartyPopper className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">PARTY HALL</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaSwimmingPool className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">SWIMMING POOL</span>
          </div>
          <div className="flex items-center space-x-4">
            <IoMdBonfire className="text-tan text-3xl" />
            <span className="text-lg font-medium text-ebony">BONFIRE AND BARBEQUE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
