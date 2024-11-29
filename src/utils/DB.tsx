"use client";
import { useEffect } from "react";

export default function DB() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/db");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    fetchData();
  }, []);

  return <div>API 호출 확인</div>;
}
