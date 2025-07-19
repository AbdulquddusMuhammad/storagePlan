import { React, useState } from "react";
import { Link } from "react-router-dom";

const StorageOPtion = ({
  type,
  typeDes,
  amount,
  setAddOnsNames,
  setAddOnsPrice,
  addOnsNames,
  addOnsPrice,
  isChecked,
  setIsChecked,
  newName,
  setNewName,
  newPrice,
  setNewPrice,
  shouldAdd,
  setShouldAdd,
}) => {
  const [isOutlined, setIsOutlined] = useState(false);
  // const [shouldAdd, setShouldAdd] = useState(false);

  function addOutline(event) {
    setIsChecked(true);
    event.stopPropagation();
    setIsOutlined(isChecked);
    // console.log(isChecked);
    // console.log(addOnsPrice);
    console.log(isOutlined);

    if (!addOnsNames.includes(type)) {
      setAddOnsNames((prev) => [...prev, type]);
      setAddOnsPrice((prev) => [...prev, amount]);
    } else {
      setAddOnsNames((prev) => prev.filter((item) => item !== type));
      setAddOnsPrice((prev) => prev.filter((item) => item !== amount));
    }

    console.log(addOnsNames);
    console.log(addOnsPrice);
  }
  return (
    <div>
      <label id="storageSelect" className="">
        <div
          className={`${
            isOutlined ? "!outline-[#6644FF]" : "!outline-[#9699AA]"
          } flex outline-2 outline-[#6644FF] h-[13vh] items-center justify-between p-[2rem] transition-all duration-500 rounded-[.5rem]`}
        >
          <div className="flex gap-[2vw] items-center">
            <input
              id="storageSelect"
              className="h-[4vh] w-[4vh]"
              type="checkbox"
              name=""
              onClick={addOutline}
            />
            <div className="flex flex-col">
              <span className="font-medium text-[#0B2259]">{type}</span>
              <span className="font-medium text-[#C6C6D0]">{typeDes}</span>
            </div>
          </div>
          <span className="font-medium text-[#6644FF]">+${amount}/mo</span>
        </div>
      </label>
    </div>
  );
};

export default StorageOPtion;
