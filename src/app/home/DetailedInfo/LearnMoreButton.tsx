"use client";
import ArrowButton from "@/components/Buttons/ArrowButton";
import React from "react";

const LearnMoreButton = () => {
  const clickHandler = () => {
    console.log("Learn more clicked");
  };

  return <ArrowButton text="Learn more" clickHandler={clickHandler} />;
};

export default LearnMoreButton;
