import React from "react";

const NavigationPanel = ({ activeComponent, setActiveComponent }) => {
  const panelsComponents = [
    { number: 1, description: "YOUR INFO" },
    { number: 2, description: "SELECT PLAN" },
    { number: 3, description: "ADDS-ON" },
    { number: 4, description: "SUMMARY" },
  ];

  return (
    <div className='flex h-[200px] xl:h-full bg-[url("../public/bg-sidebar-mobile.svg")] xl:bg-[url("../public/bg-sidebar-desktop.svg")] bg-no-repeat bg-center bg-cover rounded-0 xl:rounded-[1rem]  justify-center xl:justify-start'>
      <div className="ml-0 xl:ml-[4rem] h-full w-fit flex xl:block relative top-[-3rem] xl:top-0">
        {panelsComponents.map((element) => {
          // Determine if this step is the active one
          const isActive = activeComponent === element.description;

          return (
            <div key={element.number} className="flex pt-[1.5rem] items-center">
              <div
                className={`outline outline-2 rounded-full h-[7vh] w-[7vh] flex justify-center items-center font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#BEE2FD] text-[#02295A] outline-white"
                    : "bg-transparent text-white outline-white"
                }`}
              >
                {element.number}
              </div>
              <div className="flex flex-col ml-[1.8rem]">
                <span className="hidden xl:block text-[#9699AA] font-medium">
                  STEP {element.number}
                </span>
                <span className="hidden xl:block text-[#CDE3FF] font-bold">
                  {element.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationPanel;
