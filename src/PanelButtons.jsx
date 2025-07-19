import React from "react";

const PanelButtons = ({ number, number_des }) => {
  return (
    <div className="flex pt-[1.5rem]">
      <div className=" outline-2 outline-white rounded-[50%] h-[7vh] w-[7vh] flex justify-center items-center text-white">
        {number}
      </div>
      <div className="flex flex-col ml-[1.8rem]">
        <span className="text-[#9699AA] font-medium">STEP {number}</span>
        <span className="text-[#CDE3FF] font-bold">{number_des}</span>
      </div>
    </div>
  );
};

export default PanelButtons;
