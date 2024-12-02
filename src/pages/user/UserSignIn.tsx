"use client";
import React from "react";
import InputField from "@/ui/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  id: string;
  password: string;
}

const UserSignIn = () => {
  const router = useRouter();
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
          placeholder="******"
          register={register}
          required={true}
          errorMessage={errors.password?.message}
        />
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              name="remember"
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div className="ms-3 text-sm">
            <label
              htmlFor="remember"
              className="font-medium text-gray-500 dark:text-gray-400"
            >
              Remember this device
            </label>
          </div>
          <a
            href="#"
            className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          로그인
        </button>
        <div className="text-sm font-medium text-gray-900 dark:text-white mt-4">
          Not registered yet?{" "}
          <button
            onClick={() => router.push("/usersignup")}
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSignIn;
