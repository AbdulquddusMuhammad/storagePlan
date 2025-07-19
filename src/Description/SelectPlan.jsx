import { useEffect, useState } from "react";
import arcadeImg from "../../public/icon-arcade.svg";
import advanceImg from "../../public/icon-advanced.svg";
import proImg from "../../public/icon-pro.svg";
import { Link, useNavigate } from "react-router-dom";

const SelectPlan = ({
  monthlyPlan,
  setMonthlyPlan,
  activeComponent,
  setActiveComponent,
  isYearly,
  setIsYearly,
}) => {
  const [isArcadePlan, setIsArcadePlan] = useState(false);
  const [isAdvancedPlan, setIsAdvancedPlan] = useState(false);
  const [isPro, setIsPro] = useState(false);

  const arcade = ["Arcade", 9, 90];
  const advance = ["Advance", 12, 120];
  const pro = ["Pro", 15, 150];

  const toggle = () => {
    setIsYearly(!isYearly);
  };

  useEffect(() => {
    console.log(isYearly);
  }, [isYearly]);

  useEffect(() => {
    setActiveComponent("SELECT PLAN");
  }, []);

  const navigate = useNavigate();

  const handleNext = () => {
    console.log(isYearly);
    if (isArcadePlan || isAdvancedPlan || isPro) {
      navigate("/add-ons");
    }
  };

  const selectPlan = (plan) => {
    if (plan === "arcade" && isYearly === false) {
      setMonthlyPlan([arcade[0], arcade[1]]);
      setIsArcadePlan(true);
      setIsAdvancedPlan(false);
      setIsPro(false);
    } else if (plan === "arcade" && isYearly === true) {
      setMonthlyPlan([arcade[0], arcade[2]]);
      setIsArcadePlan(true);
      setIsAdvancedPlan(false);
      setIsPro(false);
    }

    if (plan === "advanced" && isYearly === false) {
      setMonthlyPlan([advance[0], advance[1]]);
      setIsAdvancedPlan(true);
      setIsArcadePlan(false);
      setIsPro(false);
    } else if (plan === "advanced" && isYearly === true) {
      setMonthlyPlan([advance[0], advance[2]]);
      setIsAdvancedPlan(true);
      setIsArcadePlan(false);
      setIsPro(false);
    }

    if (plan === "pro" && isYearly === false) {
      setMonthlyPlan([pro[0], pro[1]]);
      setIsPro(true);
      setIsArcadePlan(false);
      setIsAdvancedPlan(false);
    } else if (plan === "pro" && isYearly === true) {
      setMonthlyPlan([pro[0], pro[2]]);
      setIsPro(true);
      setIsArcadePlan(false);
      setIsAdvancedPlan(false);
    }
  };

  return (
    <div className="">
      <div className="w-[80vw] xl:w-[40vw] relative h-full">
        <div className="flex flex-col">
          <span className="font-bold text-[#0B2259] text-[6vh]">
            Select your plan
          </span>
          <span className="mt-[1.7vh] text-[#9699AA]">
            You have the Option of Monthly or Yearly Billing
          </span>
        </div>
        <div className="flex flex-col xl:flex-row gap-[2vw] mt-[8vh]">
          <div
            onClick={() => {
              selectPlan("arcade");
            }}
            className={`justify-start gap-[3vw] xl:justify-between p-[1.5rem] flex flex-row xl:flex-col transition-all duration-500 h-[13vh] xl:h-[13vw] w-full xl:w-[33%] outline-2 outline-[#A6BFFF] rounded-[.5rem] ${
              isArcadePlan ? "!outline-[#6644FF]" : "!outline-[#A6BFFF]"
            }`}
          >
            <img className="h-fit w-fit xl:w-[38%]" src={arcadeImg} alt="" />
            <div className="flex flex-col">
              <span className="font-medium text-[3.5vh] text-[#132B4B]">
                {arcade[0]}
              </span>
              <span className={`${isYearly ? "hidden" : ""} text-[#C6C6D0]`}>
                ${arcade[1]}/mo
              </span>
              <span className={`${isYearly ? "" : "hidden"} text-[#C6C6D0]`}>
                ${arcade[2]}/yr
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              selectPlan("advanced");
            }}
            className={`justify-start gap-[3vw] xl:justify-between p-[1.5rem] flex flex-row xl:flex-col transition-all duration-500 h-[13vh] xl:h-[13vw] w-full xl:w-[33%] outline-2 outline-[#A6BFFF] rounded-[.5rem] ${
              isAdvancedPlan ? "!outline-[#6644FF]" : "!outline-[#A6BFFF]"
            }`}
          >
            <img className="h-fit w-fit xl:w-[38%]" src={advanceImg} alt="" />
            <div className="flex flex-col">
              <span className="font-medium text-[3.5vh] text-[#132B4B]">
                {advance[0]}
              </span>
              {/* <span className="text-[#C6C6D0]">${advance[1]}/mo</span> */}
              <span className={`${isYearly ? "hidden" : ""} text-[#C6C6D0]`}>
                ${advance[1]}/mo
              </span>
              <span className={`${isYearly ? "" : "hidden"} text-[#C6C6D0]`}>
                ${advance[2]}/yr
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              selectPlan("pro");
            }}
            className={`justify-start gap-[3vw] xl:justify-between p-[1.5rem] flex flex-row xl:flex-col transition-all duration-500 h-[13vh] xl:h-[13vw] w-full xl:w-[33%] outline-2 outline-[#A6BFFF] rounded-[.5rem] ${
              isPro ? "!outline-[#6644FF]" : "!outline-[#A6BFFF]"
            }`}
          >
            <img className="h-fit w-fit xl:w-[38%]" src={proImg} alt="" />
            <div className="flex flex-col">
              <span className="font-medium text-[3.5vh] text-[#132B4B]">
                {pro[0]}
              </span>
              {/* <span className="text-[#C6C6D0]">${pro[1]}/mo</span> */}
              <span className={`${isYearly ? "hidden" : ""} text-[#C6C6D0]`}>
                ${pro[1]}/mo
              </span>
              <span className={`${isYearly ? "" : "hidden"} text-[#C6C6D0]`}>
                ${pro[2]}/yr
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[6vh] flex justify-center items-center bg-[#F8F9FE] h-[9vh]">
          <span
            className={`transition-all duration-500 text-[3vh] font-medium ${
              isYearly ? "text-[#C6C6D0]" : "text-[#02285B]"
            }`}
          >
            Monthly
          </span>
          <label
            onClick={() => {
              toggle();
              // console.log(isToggle);
            }}
            htmlFor="planType"
            className="mx-[2rem] transition-all duration-500 bg-[#02285B] w-[4rem] h-[2rem] relative rounded-[1rem] flex items-center px-[6px]"
          >
            <div
              className={`${
                isYearly ? "left-[2.4rem]" : "left-[5px]"
              }  _ball h-[1.3rem] w-[1.3rem] absolute bg-white rounded-[50%] transition-all duration-500`}
            ></div>
          </label>
          <input
            type="checkbox"
            className="mx-[1vw] hidden"
            name=""
            id="planType"
          />
          <span
            className={`transition-all duration-500 text-[3vh] font-medium ${
              !isYearly ? "text-[#C6C6D0]" : "text-[#02285B]"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="_navigationButton_ flex justify-between items-center absolute w-[80vw] xl:w-full bg-white p-[1rem] left-0 bottom-[-12vh] xl:bottom-0 [justify-self:anchor-center]">
        <Link to={"/"}>
          <button className="font-medium text-[#132B4B]">Go Back</button>
        </Link>
        <button
          onClick={handleNext}
          className="font-medium text-white bg-[#132B4B] px-8 py-3.5 rounded-xl"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
