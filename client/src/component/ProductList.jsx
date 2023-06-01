import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductList(props) {
  const { product, specs } = props;

  return (
    <div className='flex flex-col flex-grow items-stretch '>
      <p className=' text-center font-amazonEmber text-[24px] '>{product}</p>
      <div className='h-20 flex  overflow-y-scroll  flex-grow justify-start flex-start m-4 flex-wrap'>
        {specs.map((ele, i) => (
          <ProductCard
            key={"prodcard" + i}
            name={ele.title}
            price={ele.price}
            imageURL={ele.image}
            rating={ele.rating}
            prime={ele.prime}
            // specs={ele}
          />
        ))}
      </div>
    </div>
  );
}
