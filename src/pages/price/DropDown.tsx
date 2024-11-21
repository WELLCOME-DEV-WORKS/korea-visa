"use client";
import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface VisaType {
  id: number;
  type: string;
  value: string;
}
interface ListProps {
  onVisaChange: (visa: string) => void;
}

// 기본 비자 옵션 리스트
const defaultVisaOptions: VisaType[] = [
  { id: 1, type: "사업비자", value: "businessVisa" },
  { id: 2, type: "구직비자", value: "jobSearchVisa" },
  { id: 3, type: "취업비자", value: "employmentVisa" },
  { id: 4, type: "동포비자", value: "overseasVisa" },
  { id: 5, type: "결혼비자", value: "marriageVisa" },
  { id: 6, type: "영주권", value: "residence" },
  { id: 7, type: "동반비자", value: "accompanyingVisa" },
];

const VisaList = ({ onVisaChange }: ListProps) => {
  const [selected, setSelected] = useState<VisaType | null>(null);

  const handleChange = (visa: VisaType) => {
    setSelected(visa);
    onVisaChange(visa.value);
  };

  return (
    <div className="mx-auto w-[24em] p-4">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          {/* 버튼 */}
          <ListboxButton
            className={clsx(
              "block w-full rounded-lg bg-gray-100 py-2 px-3 text-left text-lg",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500"
            )}
          >
            {selected ? selected.type : "비자를 선택하세요"}
            <ChevronDownIcon
              className="absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />
          </ListboxButton>

          {/* 옵션 */}
          <ListboxOptions
            className={clsx(
              "absolute mt-2 w-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10"
            )}
          >
            {defaultVisaOptions.map((visa) => (
              <ListboxOption
                key={visa.id}
                value={visa}
                className={({ active, selected }) =>
                  clsx(
                    "cursor-pointer select-none py-2 px-4",
                    active ? "bg-indigo-100 text-indigo-900" : "text-gray-700",
                    selected && "font-bold "
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span>{visa.type}</span>
                    {selected && (
                      <CheckIcon
                        className="invisible size-1 fill-indigo-500 group-data-[selected]:visible"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default VisaList;
