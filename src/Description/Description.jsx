import React from "react";
import YourInfo from "./YourInfo";
import SelectPlan from "./SelectPlan";
import Add_Ons from "./Add_Ons";
import Summary from "./Sumaary";
import { Outlet } from "react-router-dom";

const Description = () => {
  return (
    <div className="xl:mt-[2rem] xl:ml-[15vw] bg-[#EEF5FF] xl:bg-transparent relative align-center w-auto flex justify-center [&>*]:relative [&>*]:top-[-5rem] xl:[&>*]:top-0 [&>*]:bg-white [&>*]:px-[1rem] [&>*]:rounded-[.7rem] h-auto">
      <Outlet />
    </div>
  );
};

export default Description;
