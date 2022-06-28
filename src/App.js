import React from "react";

import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

const App = () => {
  return (
    <div className="grid place-content-center m-auto w-9/12 h-screen">
      <Header />
      <div className="flex flex-row mt-10 ">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default App;
