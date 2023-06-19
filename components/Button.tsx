"use client";

import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ title, styles, handleClick, btnType, isDisables, leftIcon }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${styles} flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {leftIcon && (
        <div className="relative w-6 h-6">
          <Image src={leftIcon} alt="left icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default Button;
