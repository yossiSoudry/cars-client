import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap5
      sm:px-16 px-6 py-10"
      >
        <div className="flex items-start justify-start flex-col gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            height={18}
            width={118}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CaRS 2023
            <br />
            כל הזכויות שמורות &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="center flex flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>CaRS 2023 כל הזכויות שמורות &copy;</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            מדיניות פרטיות
          </Link>
          <Link href="/" className="text-gray-500">
            כללי שימוש
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
