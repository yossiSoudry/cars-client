"use client";
import { manufacturers } from "@/constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { CheckIcon } from '@heroicons/react/20/solid'
import { SearchManuFacturerProps } from "@/types";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
      <Combobox value={manufacturer} onChange={setManufacturer}>
          <Combobox.Input
            className="w-full h-[48px] pr-12 p-4 rounded-r-full max-sm:rounded-full bg-light-white outline-none text-sm"
            placeholder="פולקסוואגן"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
            {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                >
                  צור חדש "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={` truncate center ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                          {selected && <CheckIcon className="h-4" />}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {/* {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null} */}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
      </Combobox>
  );
};

export default SearchManufacturer;
