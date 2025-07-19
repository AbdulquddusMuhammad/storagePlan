import { act, React, useState, useEffect } from "react";
import NavigationPanel from "./NavigationPanel";
import Description from "./Description/Description";
import YourInfo from "./Description/YourInfo";
import SelectPlan from "./Description/SelectPlan";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Add_Ons from "./Description/Add_Ons";
import Sumaary from "./Description/Sumaary";
import ThankYouPage from "./ThankYouPage";

const App = () => {
  const [monthlyPlan, setMonthlyPlan] = useState([]);
  const [addOnsNames, setAddOnsNames] = useState([]);
  const [addOnsPrice, setAddOnsPrice] = useState([]);
  const [total, setTotal] = useState(0);
  const [newName, setNewName] = useState([]);
  const [newPrice, setNewPrice] = useState([]);
  const [sumArr, setSumArr] = useState([]);
  const [activeComponent, setActiveComponent] = useState("YourInfo");
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    console.log(activeComponent);
  }, []);

  return (
    <div className="bg-[#FFFFFF] h-screen w-screen flex ">
      <div className="h-full w-full p-0 xl:py-[2vh] xl:px-[2vw] flex flex-col xl:grid xl:[grid-template-columns:30fr_80fr]">
        <NavigationPanel
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
        <Router>
          <Routes>
            {/* <Route path="/" element={<NavigationPanel />} /> */}
            <Route path="/" element={<Description />}>
              <Route
                path="/"
                element={
                  <YourInfo
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                  />
                }
              />
              <Route
                path="/selectplan"
                element={
                  <SelectPlan
                    setMonthlyPlan={setMonthlyPlan}
                    monthlyPlan={monthlyPlan}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    isYearly={isYearly}
                    setIsYearly={setIsYearly}
                  />
                }
              />
              <Route
                path="/add-ons"
                element={
                  <Add_Ons
                    setAddOnsNames={setAddOnsNames}
                    setAddOnsPrice={setAddOnsPrice}
                    addOnsNames={addOnsNames}
                    addOnsPrice={addOnsPrice}
                    newName={newName}
                    setNewName={setNewName}
                    newPrice={newPrice}
                    setNewPrice={setNewPrice}
                    sumArr={sumArr}
                    setSumArr={setSumArr}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                  />
                }
              />
              <Route
                path="/summary"
                element={
                  <Sumaary
                    monthlyPlan={monthlyPlan}
                    setAddOnsNames={setAddOnsNames}
                    setAddOnsPrice={setAddOnsPrice}
                    addOnsNames={addOnsNames}
                    addOnsPrice={addOnsPrice}
                    newName={newName}
                    setNewName={setNewName}
                    newPrice={newPrice}
                    setNewPrice={setNewPrice}
                    sumArr={sumArr}
                    setSumArr={setSumArr}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    isYearly={isYearly}
                    setIsYearly={setIsYearly}
                  />
                }
              />
              <Route path="/thankyouPage" element={<ThankYouPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
