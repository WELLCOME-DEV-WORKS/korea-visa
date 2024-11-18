"use client";
import React from "react";
import "@/styles/KoreaVisa/KVLandingSection1.css";

const urlOpen = (link: string) => {
  if (link) {
    window.open(link, "_blank");
  }
};

interface ButtonProps {
  link: string; // 필수
  text?: string;
  cssClass?: string;
  children?: React.ReactNode;
}

const KVButton = ({ text, link, cssClass, children }: ButtonProps) => {
  return (
    <button
      className={`${cssClass ? cssClass : "kv-first-button"}`}
      onClick={() => urlOpen(link)}
    >
      {text || children}
    </button>
  );
};

export default KVButton;
