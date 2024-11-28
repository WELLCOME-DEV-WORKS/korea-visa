import React from "react";

// InputFieldProps 인터페이스 정의
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  children?: React.ReactNode; // children 추가
}

const InputField: React.FC<
  InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  id,
  label,
  type,
  placeholder,
  required,
  pattern,
  children,
  ...props // 나머지 props 받기
}) => {
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
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      />
      {children}
    </div>
  );
};

export default InputField;
