import React from "react";
import Resolution from "./Specs/Resolution.jsx";
import RefreshRate from "./Specs/RefreshRate.jsx";
// this has a lot of imports for now, would like to make this more modular in the future

export default function ProductSpecifications(props) {
  const { product } = props;

  const inputStyle = {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.3rem",
    paddingRight: "1rem",
    backgroundColor: "#ffffff",
    color: "#1F2937",
    fontWeight: "600",
    borderRadius: "0.25rem",
    borderWidth: "1px",
    borderColor: "#9CA3AF",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    width: "100%",
  };

  return (
    <div>
      {product === "Computer Monitors" && (
        <div>
          <input type='text' placeholder='Max Price' style={inputStyle}></input>
          <input type='text' placeholder='Min Price' style={inputStyle}></input>
          <input
            type='text'
            placeholder='Min Rating'
            style={inputStyle}></input>
          <div className='flex'>
            <input
              type='checkbox'
              placeholder='Prime'
              className='flex bg-white hover:bg-gray-100 text-gray-800 mr-4 font-semibold py-2 w-5 font-amazonEmber'
            />
            <p className='flex text-[#2A96C5] text-[20px] md:font-bold'>
              Prime
            </p>
          </div>
        </div>
      )}
      {product === "TVs" && (
        <div>
          <input type='text' placeholder='Max Price' style={inputStyle}></input>
          <input type='text' placeholder='Min Price' style={inputStyle}></input>
          <input
            type='text'
            placeholder='Size (inches)'
            style={inputStyle}></input>
          <Resolution tvSpecs />
        </div>
      )}
    </div>
  );
}
