import React from "react";
import { useDispatch } from 'react-redux';
import { Input } from "antd";
import { imageSearch } from "../redux/action";
export default function Header() {
  const { Search } = Input;
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(imageSearch(e || "test"));
  };

  return (
    <div className="bg-black text-white h-14 flex flex-col  justify-center items-center sticky w-full p-10">
      Search Photos
      <Search
        placeholder="input search text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
