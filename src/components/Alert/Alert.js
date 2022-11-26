import React from "react";
import Icons from "../Icons/Icons";
import { AlertType } from "./type";

const getThemeColor = (variant = AlertType.INFO) => {
  switch (variant) {
    case AlertType.ERROR:
      return "bg-red";
    case AlertType.WARNING:
      return "bg-yellow";
    case AlertType.SUCCESS:
      return "bg-green";
    case AlertType.INFO:
    default:
      return "bg-brandBlue";
  }
};
const getIcon = (variant = AlertType.INFO) => {
  switch (variant) {
    case AlertType.ERROR:
      return "info";
    case AlertType.WARNING:
      return "warning";
    case AlertType.SUCCESS:
      return "success";
    case AlertType.INFO:
    default:
      return "info";
  }
};
const getContent = (variant = AlertType.INFO) => {
  switch (variant) {
    case AlertType.ERROR:
      return "Error! Task failed successfully.";
    case AlertType.WARNING:
      return "Invalid email address!";
    case AlertType.SUCCESS:
      return "Purchase has been confirmed!";
    case AlertType.INFO:
    default:
      return "New software update available.";
  }
};

export default function Alert(props) {
  const { className = "", variant } = props;
  const icon = getIcon(variant);
  const bgColor = getThemeColor(variant);
  const content = getContent(variant);

  return (
    <div
      className={`flex h-14 w-auto items-center rounded-lg ${bgColor} ${className}`}
    >
      <div className="flex pl-2">
        <Icons id={variant} width={30} height={18} className="fill-white" />
      </div>
      <div className="flex-1 p-2">{content}</div>
    </div>
  );
}
