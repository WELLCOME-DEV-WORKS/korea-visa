"use client";
import InputField from "@/ui/FormInput";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface UserFormValues {
  // id: string;
  password: string;
  // name: string;
  // address: string;
  email: string;
  // phoneNumber: string;
  // country: string;
  // birthDay: string;
  // policyAgree: boolean;
  //   nickName: string;
}

const UserSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>();
  const onSubmit: SubmitHandler<UserFormValues> = (data) =>
    console.log("유저 데이터 췤: ", data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="email"
          label="Email address"
          type="email"
          placeholder="john.doe@company.com"
          register={register}
          required={true}
          errorMessage={errors.email?.message} // 에러 메시지 전달
        />
        <InputField
          id="password"
          label="password"
          type="password"
          placeholder="password"
          register={register}
          required={true}
          errorMessage={errors.password?.message} // 에러 메시지 전달
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserSignUp;
