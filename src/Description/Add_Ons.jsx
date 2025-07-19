import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add_Ons = ({
  sumArr,
  setSumArr,
  setAddOnsNames,
  setAddOnsPrice,
  addOnsNames,
  addOnsPrice,
  activeComponent,
  setActiveComponent,
}) => {
  const navigate = useNavigate();

  const addOnsList = [
    {
      id: 1,
      name: "Arcade",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      name: "Advanced",
      description: "Extra ITB of cloud save",
      price: 2,
    },
    {
      id: 3,
      name: "Pro",
      description: "Custom theme on your profile",
      price: 2,
    },
  ];

  useEffect(() => {
    setActiveComponent("ADDS-ON");
  }, []);

  const handleAddOnToggle = (name, price, isChecked) => {
    if (isChecked) {
      if (!addOnsNames.includes(name)) {
        setAddOnsNames((prev) => [...prev, name]);
        setAddOnsPrice((prev) => [...prev, price]);
      }
    } else {
      const index = addOnsNames.indexOf(name);
      if (index !== -1) {
        setAddOnsNames((prev) => prev.filter((item) => item !== name));
        setAddOnsPrice((prev) => prev.filter((_, idx) => idx !== index));
      }
    }
  };

  useEffect(() => {
    console.log("Add-ons selected:", addOnsNames);
    console.log("Prices:", addOnsPrice);
  }, [addOnsNames, addOnsPrice]);

  const handleNext = () => {
    navigate("/summary");
  };

  return (
    <div className="w-[80vw] xl:w-[40vw] relative h-full py-[2rem]">
      <div className="flex flex-col">
        <span className="font-bold text-[#0B2259] !text-[6vw] xl:!text-[6vh]">
          Pick Add-Ons
        </span>
        <span className="mt-[1.7vh] text-[#9699AA]">
          Add-ons help enhance your gaming experience.
        </span>
      </div>

      <div className="mt-[8vh]">
        {addOnsList.map(({ id, name, description, price }) => (
          <div className="mt-[3vh]" key={id}>
            <label>
              <div
                className={`flex outline-2 ${
                  addOnsNames.includes(name)
                    ? "outline-[#6644FF] bg-[#F8F9FE]"
                    : "outline-[#9699AA] bg-[#FFFFFF]"
                } h-[5.5rem] xl:h-[13vh] items-center justify-between p-[.5rem] xl:p-[2rem] transition-all duration-500 rounded-[.5rem]`}
              >
                <div className="flex gap-[2vw] items-center">
                  <input
                    className="h-6 w-6 xl:h-[4vh] xl:w-[4vh]"
                    type="checkbox"
                    checked={addOnsNames.includes(name)}
                    onChange={(e) =>
                      handleAddOnToggle(name, price, e.target.checked)
                    }
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#0B2259]">{name}</span>
                    <span className="font-medium text-[#C6C6D0]">
                      {description}
                    </span>
                  </div>
                </div>
                <span className="font-medium text-[#6644FF]">+${price}/mo</span>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="_navigationButton_ flex justify-between items-center absolute bottom-[-22vh] bg-white xl:bottom-0 w-full">
        <Link to="/selectPlan">
          <button className="font-medium text-[#132B4B]">Go Back</button>
        </Link>
        <button
          onClick={handleNext}
          className="font-medium text-white bg-[#132B4B] px-8 py-3.5 rounded-xl"
        >
          Next Step
        </button>
        {/* <button
          onClick={() => {
            console.log(addOnsNames);
            console.log(addOnsPrice);
          }}
        >
          Debug Info
        </button> */}
      </div>
    </div>
  );
};

export default Add_Ons;
