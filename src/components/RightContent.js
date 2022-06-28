import React from "react";

import Records from "../images.json";

const RightContent = () => {
  return (
    <div className="grid gap-1 grid-cols-4 auto-rows-auto">
      {Records &&
        Records.map((record) => {
          return (
            <div
              key={record.id}
              className={"col-span-2" + (record.vertical ? " row-span-2" : "")}
            >
              <img
                className={"h-full" + (record.wFull ? " w-full" : "")}
                src={record.imageURL}
                alt={record.name}
              />
            </div>
          );
        })}
    </div>
  );
};

export default RightContent;
