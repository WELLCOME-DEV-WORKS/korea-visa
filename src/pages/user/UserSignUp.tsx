import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface UserFormInput {
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

function UserSignUp() {
  return <div>UserSignUp</div>;
}

export default UserSignUp;
