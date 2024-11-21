"use client";
import ArrowButton from "@/components/Buttons/ArrowButton";
import React from "react";

const ViewPortfolioButton = () => {
  const clickHandler = () => {
    console.log("View our Portfolio clicked");
  };

  return <ArrowButton text="View our Portfolio" clickHandler={clickHandler} />;
};

export default ViewPortfolioButton;
