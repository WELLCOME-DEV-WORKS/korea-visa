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
}

interface ListProps {
  visaOptions: VisaType[];
}

// 기본 비자 옵션 리스트
const defaultVisaOptions: VisaType[] = [
  { id: 1, type: "사업비자" },
  { id: 2, type: "구직비자" },
  { id: 3, type: "취업비자" },
  { id: 4, type: "동포비자" },
  { id: 5, type: "결혼비자" },
  { id: 6, type: "영주권" },
  { id: 7, type: "동반비자" },
];

const VisaList = ({ visaOptions = defaultVisaOptions }) => {
  const [selected, setSelected] = useState<VisaType | null>(null);

  return (
    <div className="mx-auto w-[24em] p-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* 버튼 */}
          <ListboxButton
            className={clsx(
              "block w-full rounded-lg bg-gray-100 py-2 px-3 text-left text-sm",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500"
            )}
          >
            {selected ? selected.type : "비용이 궁금한 비자를 선택해주세요."}
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
            {visaOptions.map((visa) => (
              <ListboxOption
                key={visa.id}
                value={visa}
                className={({ active, selected }) =>
                  clsx(
                    "cursor-pointer select-none py-2 px-4",
                    active ? "bg-indigo-100 text-indigo-900" : "text-gray-700",
                    selected && "font-bold"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span>{visa.type}</span>
                    {selected && (
                      <CheckIcon
                        className="inline-block w-5 h-5 ml-2 text-indigo-500"
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
