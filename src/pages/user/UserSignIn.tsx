"use client";
import React from "react";
import InputField from "@/ui/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormValues {
  id: string;
  password: string;
}

const UserSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    // 로컬에서 유저데이터 갖고오기!
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // ID/PW 비교
      if (data.id === parsedUser.id && data.password === parsedUser.password) {
        alert("로그인 성공!");
      } else {
        alert("아이디 또는 패스워드가 일치하지 않습니다.");
      }
    } else {
      alert("아이디, 비밀번호를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>

        <InputField
          id="id"
          label="아이디"
          type="text"
          placeholder="id"
          register={register}
          required={true}
          errorMessage={errors.id?.message}
        />

        <InputField
          id="password"
          label="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={register}
          required={true}
          errorMessage={errors.password?.message}
        />

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default UserSignIn;
