import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "korea-visa",
  pass: "koreavisa1234!!",
  dbName: "korea-visa-mongodb",
};

const connectDB = async () => {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  await mongoose.connect(MONGODB_URI, options);
  console.log("MongoDB에 연결되었습니다.");
  return mongoose.connection;
};

// 연결 오류 시
mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 오류:", err);
});

// 연결 종료 시
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB 연결이 종료되었습니다.");
});

export default connectDB;

// import { MongoClient } from "mongodb";

// const url = "본인이 만든 데이터베이스 주소 링크"; // 실제 MongoDB URI로 변경
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

// let connectDB;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongo) {
//     global._mongo = MongoClient.connect(url, options);
//   }
//   connectDB = global._mongo;
// } else {
//   connectDB = MongoClient.connect(url, options);
// }

// export { connectDB };

// lib/dbConnect.js
// 환경 변수에서 MongoDB URI를 가져옵니다.

// let cached = global.mongo;

// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
