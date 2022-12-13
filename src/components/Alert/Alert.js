import React from "react";
import Icons from "../Icons/Icons";

export default function Alert(props) {
  const { className = "", content, variant } = props;

  const getThemeColor = () => {
    switch (variant) {
      case "error":
        return "bg-red-300";
      case "info":
        return "bg-[#84C1FF]";
      case "success":
        return "bg-green-400";
    }
  };

  return (
    <div
      className={`flex h-14 w-auto items-center rounded-lg ${getThemeColor()}  ${className}`}
    >
      <div className="flex pl-2">
        <Icons id="info" width={30} height={18} className="fill-white" />
      </div>
      <div
        className="flex-1 px-5 text-yellow headerText text-left text-xl"
        data-storke={content}
      >
        {content}
      </div>
    </div>
  );
}
