"use client";
import { manufacturers } from "@/constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
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
          item[1]
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const getEnglishNameByHebrewName = (hebrewName: string): string | null => {
    const matchingManufacturer = manufacturers.find(
      (item) => item[1] === hebrewName
    );
    return matchingManufacturer ? matchingManufacturer[0] : null;
  };

  return (
    <Combobox value={manufacturer} onChange={setManufacturer}>
      <Combobox.Input
        className="w-full h-[48px] pr-12 p-4 rounded-r-full max-sm:rounded-full bg-light-white outline-none text-sm"
        placeholder="פולקסוואגן..."
        displayValue={(manufacturer: string) => manufacturer}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Transition
        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery("")} // Reset the search query after the transition completes
      >
        <Combobox.Options
          className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          static
        >
          {filteredManufacturers.length === 0 && query !== "" ? (
            <Combobox.Option
              value={query}
              className="cursor-default select-none py-2 pr-10 pl-4"
            >
              צור חדש "{query}"
            </Combobox.Option>
          ) : (
            filteredManufacturers.map((item) => (
              <Combobox.Option
                key={item[0]}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pr-10 pl-4 ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`
                }
                value={getEnglishNameByHebrewName(item[1]) || ""}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={` truncate center ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item[1]}
                      {selected && <CheckIcon className="h-4" />}
                    </span>
                    {/* ... */}
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
