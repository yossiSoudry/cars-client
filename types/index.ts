import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  styles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  leftIcon?: string;
  isDisables?: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  limit: number;
  fuel: string;
  model: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps{
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options:OptionProps[]
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
