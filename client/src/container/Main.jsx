import React, { useState } from 'react';
import ProductList from '../component/ProductList.jsx';
import SearchBar from '../component/SearchBar.jsx';

export default function Main() {
  // define state variable
  const [product, setProduct] = useState('');
  const [specs, setSpecs] = useState([]); // or {} depends on backend
  //const [filteredHits, setFilteredHits] = useState([]); // or {} depends on backend
  const [userFilters, setUserFilters] = useState({});

  /*
    useEffect to fetch product names from Product Table ( does not exist yet :) )
    so here is some hard code
  */

  const updateFilter = (targetVal, key) => {
    //takes a key (spec), and an input (event.target), and adds it to userFilters
    const newState = Object.assign({}, userFilters);
    console.log(targetVal);
    if (targetVal === '') {
      delete newState[key];
    } else {
      let newFunc;
      //adds a new filter function to the array based on what kind of change is made
      switch (key) {
        case 'maxPrice': {
          newFunc = (ele) => {
            const priceNum = Number(ele.price.slice(1));
            return priceNum <= targetVal; //if price is num just spit price straight in
          };
          break;
        }
        case 'minPrice': {
          newFunc = (ele) => {
            const priceNum = Number(ele.price.slice(1)); //if price is num just spit price straight in
            return priceNum >= targetVal;
          };
          break;
        }
        case 'prime': {
          newFunc = (ele) => {
            return ele.prime == targetVal;
          };
          break;
        }
        case 'rating': {
          newFunc = (ele) => {
            return ele.rating >= targetVal;
          };
          break;
        }
        default: {
          console.log('oops a mistake happened');
          break;
        }
      }
      newState[key] = newFunc;
    }
    console.log('NewUserFilters', newState);
    setUserFilters(newState);
    ///
    // const dummyObj = {};
    // dummyObj[key] = event.target.value;
    // const newUserFilters = Object.assign({}, userFilters, dummyObj);
    // setUserFilters(newUserFilters);
    //
  };

  //takes in array of products, returns a filtered array.
  // iterates through all the filters in the userFilters array.
  const applyFilters = (arr) => {
    const filterArr = Object.values(userFilters);
    return filterArr.reduce((acc, curr) => acc.filter(curr), arr);
  };

  const handleSelect = async (event) => {
    const selectedCategory = event.target.value;
    console.log('selected category ', selectedCategory);
    setProduct(event.target.value);

    try {
      const response = await fetch('scraper/scrape', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      // response should be an array of objects which are product listings
      // send category type and response to product specs component for further rendering
      setSpecs(data);
    } catch (error) {
      console.log({
        log: 'handleError',
        status: 400,
        message: 'blew up in handleData ',
        error,
      });
    }
  };

  return (
    <div className="border border-solid border-green-400 flex flex-grow bg-green-100">
      <div className="flex flex-col flex-shrink w-56 mx-4">
        <SearchBar
          handleSelect={handleSelect}
          product={product}
          // specs={specs}
          updateFilter={updateFilter}
        />
      </div>
      <div className="flex flex-grow">
        <ProductList
          product={product}
          specs={specs}
          applyFilters={applyFilters}
        />
      </div>
    </div>
  );
}

//ideally we dont need to drill specs down into product list, but for presentation purposes we are drilling specs down into product list
