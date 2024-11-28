// InputField.tsx
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; // register 함수 타입
  required?: boolean;
  errorMessage?: string; // 에러 메시지
}

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  register,
  required,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id, { required: required && `${label}은 필수입니다.` })}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
