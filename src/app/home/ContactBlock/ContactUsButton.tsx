"use client";
import ArrowButton from "@/components/Buttons/ArrowButton";
import React from "react";

const ContactUsButton = () => {
  const clickHandler = () => {
    console.log("Contact us clicked");
  };

  return <ArrowButton text="Contact us" clickHandler={clickHandler} />;
};

export default ContactUsButton;
