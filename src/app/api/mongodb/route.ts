import { NextResponse } from "next/server";
import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return; // 이미 연결된 경우
  }
  if (!mongoURI) {
    throw new Error("MONGODB_URI 환경 변수가 정의되지 않았습니다.");
  }
  await mongoose.connect(mongoURI);
}

// GET 요청 처리
export async function GET() {
  await connectToDatabase();
  return NextResponse.json({ message: "Hello World!" });
}
