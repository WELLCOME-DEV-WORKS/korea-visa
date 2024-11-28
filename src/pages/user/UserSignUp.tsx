import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface UserFormValues {
  id: string;
  password: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  country: string;
  birthDay: string;
  policyAgree: boolean;
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
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </>
  );
};

export default UserSignUp;
