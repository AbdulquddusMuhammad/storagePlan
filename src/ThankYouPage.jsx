import React from "react";
import thankYouImg from "../public/icon-thank-you.svg";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center w-[80vw] h-fit py-14 xl:w-[40vw] ml-[]">
      <img src={thankYouImg} alt="Thank You" className="mb-4" />
      <h2 className="text-[#032759] font-bold text-[2.1vw]">Thank you!</h2>
      <span className="text-center font-medium text-[#A3A4A9]">
        Thanks for confirming your subscription! We hope you have <br /> fun
        using our platform. If you ever need support, please feel <br /> free to
        email us at support@loremgaming.com.
      </span>
    </div>
  );
};

export default ThankYouPage;
