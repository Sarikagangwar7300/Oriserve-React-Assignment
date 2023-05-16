import React from "react";
import { Spin } from "antd";

export default function Loader() {
  return (
    <Spin
      tip="Loading... Almost there!"
      size="large"
      className={`text-xs font-regular block space-y-4 mt-10`}
    />
  );
}
