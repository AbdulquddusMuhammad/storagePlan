import { React, useEffect } from "react";
import { Link } from "react-router-dom";

const Summary = ({
  monthlyPlan,
  addOnsNames,
  addOnsPrice,
  activeComponent,
  setActiveComponent,
  isYearly,
  setIsYearly,
}) => {
  // Calculate total price (plan + add-ons)
  const planPrice = monthlyPlan[1] || 0;
  const addOnsTotal = addOnsPrice.reduce((sum, price) => sum + price, 0);
  const totalPrice = planPrice + addOnsTotal;

  useEffect(() => {
    setActiveComponent("SUMMARY");
  }, []);

  return (
    <div className="w-[80vw] xl:w-[40vw] relative h-full py-6">
      <div className="flex flex-col">
        <span className="font-bold text-[#0B2259] text-[6vh]">
          Finishing up
        </span>
        <span className="mt-[1.7vh] text-[#9699AA]">
          Double-check everything looks OK before confirming.
        </span>
      </div>

      <div className="mt-[8vh] bg-[#F8F9FE] min-h-[19vh] p-[1.4rem] flex flex-col rounded-md">
        <div className="text-[#0B2259] font-bold flex w-full justify-between">
          <span>{`${monthlyPlan[0]}(${isYearly ? "Yearly" : "Monthly"})`}</span>
          <span className="_monthlyFee_">${planPrice}/mo</span>
        </div>
        <Link to="/selectPlan">
          <span className="underline text-blue-700 cursor-pointer">Change</span>
        </Link>

        <div className="bg-black opacity-10 mt-[3vh] h-[2px] w-full"></div>

        {addOnsNames.length === 0 && (
          <span className="text-[#9699AA] mt-4">No add-ons selected</span>
        )}

        {addOnsNames.map((name, index) => (
          <div
            key={index}
            className="flex font-medium justify-between mt-[2.5vh]"
          >
            <span className="text-[#BDBDC7]">{name}</span>
            <span className="text-[#08244A]">+${addOnsPrice[index]}/mo</span>
          </div>
        ))}
      </div>

      <div className="px-[1.4rem] flex justify-between mt-[3.5vh]">
        <span className="font-medium text-[#BDBDC7]">Total (per month)</span>
        <span className="font-bold text-[#5A49E7]">${totalPrice}/mo</span>
      </div>

      <div className="_navigationButton_ flex justify-between items-center absolute bottom-0 w-full px-[1.4rem] py-4 bottom-[-22vh] bg-white p-5">
        <Link to="/add-ons">
          <button className="font-medium text-[#132B4B]">Go Back</button>
        </Link>
        <Link to="/thankyouPage">
          <button className="font-medium text-white bg-[#938CFE] px-8 py-3.5 rounded-xl">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
