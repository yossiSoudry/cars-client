"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="group cursor-pointer flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="ext-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          ₪
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /יומי
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              height={20}
              width={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "אוטומטי" : "ידני"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" height={20} width={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" height={20} width={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button
            title="לפרטים נוספים"
            styles="w-full bg-primary-blue py-[16px] rounded-full text-white text-[14px] font-bold"
            leftIcon="/left-arrow.svg"
            handleClick={()=> setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
