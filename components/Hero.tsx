"use client";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row-reverse flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 px">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          הזמנת רכב במהירות ובקלות!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          שדרג את חויית השכרת הרכב שלך עם תהליך ההזמנה המושקע שלנו.
        </p>
        <Button
          title="סקירה"
          styles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/hero.png"
            fill
            alt="hero"
            className="object-contain"
            // priority
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Hero;
