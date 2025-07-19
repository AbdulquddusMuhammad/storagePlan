import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const YourInfo = ({ activeComponent, setActiveComponent }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);

  useEffect(() => {
    setActiveComponent("YOUR INFO");
  }, []);

  const handleNext = () => {
    console.log("working");
    if (name === "") {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }
    if (email === "") {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
    if (phone === "") {
      setIsPhoneEmpty(true);
    } else {
      setIsPhoneEmpty(false);
    }

    if (name && email && phone) {
      navigate("/selectplan");
    }
  };

  return (
    <div className="flex flex-col relative h-full xl:w-fit w-[95vw] py-[3vh] ">
      <div className="flex flex-col">
        <span className="font-bold !text-[6vw] xl:!text-[6vh] text-[#0B2259] mb-[3vh] xl:mb-0">
          Personal Info
        </span>
        <span className="text-black opacity-50">
          Please provide your name, email address and phone number
        </span>
      </div>
      <form action="" className="flex flex-col">
        <div className="w-full flex justify-between mb-[1.5vh] mt-[3vh] font-medium">
          <label className="text-[#0B2259] font-medium" htmlFor="name">
            Name
          </label>
          <span
            className={`${
              isNameEmpty === true ? "!block" : "!hidden"
            } text-red-700`}
          >
            The Field is Required
          </span>
        </div>
        <input
          id="name"
          autoComplete="name"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          className="text-black opacity-50 outline-2 outline-[#00000066] rounded-[.5rem] xl:w-[40vw] xl:h-[8vh] w-full h-[10vw] pl-[1rem]"
          placeholder="e.g Stephen King"
        />
        <div className="w-full flex justify-between mb-[1.5vh] mt-[3vh] font-medium">
          <label className="text-[#0B2259] font-medium" htmlFor="email">
            Email
          </label>
          <span
            className={`${
              isEmailEmpty === true ? "!block" : "!hidden"
            } text-red-700`}
          >
            The Field is Required
          </span>
        </div>
        <input
          id="email"
          autoComplete="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          className="text-black opacity-50 outline-2 outline-[#00000066] rounded-[.5rem] xl:w-[40vw] xl:h-[8vh] w-full h-[10vw] pl-[1rem]"
          placeholder="e.g StephenKing@gmail.com"
        />
        <div className="w-full flex justify-between mb-[1.5vh] mt-[3vh] font-medium">
          <label className="text-[#0B2259] font-medium" htmlFor="number">
            Phone Number
          </label>
          <span
            className={`${
              isPhoneEmpty === true ? "!block" : "!hidden"
            } text-red-700`}
          >
            The Field is Required
          </span>
        </div>
        <input
          id="number"
          autoComplete="number"
          name="number"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          type="number"
          className="text-black opacity-50 outline-2 outline-[#00000066] rounded-[.5rem] xl:w-[40vw] xl:h-[8vh] w-full h-[10vw] pl-[1rem]"
          placeholder="e.g + 1 234 5678"
        />
      </form>
      <nav>
        <button
          onClick={handleNext}
          className="bg-[#0B2259] w-fit px-[7vh] py-[2vh] rounded-[.8rem] absolute xl:bottom-0 right-0 text-white  xl:block bottom-[-25vh]"
        >
          Next Step
        </button>
      </nav>
    </div>
  );
};

export default YourInfo;
