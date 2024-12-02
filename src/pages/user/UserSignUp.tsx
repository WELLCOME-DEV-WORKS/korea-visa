"use client";
import InputField from "@/ui/FormInput";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface UserFormValues {
  id: string;
  password: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  country: string;
  birthDay: string;
  // policyAgree: boolean;
  // nickName: string;
}

const UserSignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>();

  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
    console.log("유저 데이터 췤: ", data);

    // 1. 로컬스토리지에 데이터 저장
    localStorage.setItem("userData", JSON.stringify(data));

    // 2. /usersignin 페이지로 이동
    router.push("/usersignin");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-2/3">
        <InputField
          id="id"
          label="id"
          type="text"
          placeholder="id"
          register={register}
          required={true}
          errorMessage={errors.id?.message} // 에러 메시지 전달
        />

        <InputField
          id="password"
          label="password"
          type="password"
          placeholder="******"
          register={register}
          required={true}
          errorMessage={errors.password?.message} // 에러 메시지 전달
        />
        <InputField
          id="name"
          label="name"
          type="name"
          placeholder="name"
          register={register}
          required={true}
          errorMessage={errors.name?.message} // 에러 메시지 전달
        />
        <InputField
          id="email"
          label="Email address"
          type="email"
          placeholder="wecomevisa@company.com"
          register={register}
          required={true}
          errorMessage={errors.email?.message} // 에러 메시지 전달
        />
        <InputField
          id="address"
          label="address"
          type="text"
          placeholder="address"
          register={register}
          required={true}
          errorMessage={errors.address?.message} // 에러 메시지 전달
        />
        <InputField
          id="phoneNumber"
          label="phoneNumber"
          type="tel"
          placeholder="010-1234-1234"
          register={register}
          required={true}
          errorMessage={errors.address?.message} // 에러 메시지 전달
        />
        <InputField
          id="country"
          label="country"
          type="text"
          placeholder="country"
          register={register}
          required={true}
          errorMessage={errors.country?.message} // 에러 메시지 전달
        />
        <InputField
          id="birthDay"
          label="birthDay"
          type="date"
          placeholder="birthDay"
          register={register}
          required={true}
          errorMessage={errors.birthDay?.message} // 에러 메시지 전달
        />
        <button
          type="submit"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 
          hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 
          focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UserSignUp;
