import React from "react";
import { BiHelpCircle } from "react-icons/bi";

const Header = () => {
  return (
    <React.Fragment>
      <h1 className="text-5xl font-bold mb-1">
        Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh,
        Matisse, & More
      </h1>
      <div className="flex flex-row">
        <p className="text-slate-400 font-bold text-lg mr-2">
          Muilti-Day Course
        </p>
        <BiHelpCircle size={30} style={{ fill: " rgb(148 163 184)" }} />
      </div>
    </React.Fragment>
  );
};

export default Header;
