import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  // const loginNavStyle = {
  //   marigin: "10px",
  // };
  //   useEffect(() => {
  //     fetch('/login', {
  //       credentials: 'include',
  //     }).then((res) =>
  //       res.json().then((userInfo) => {
  //         setUserInfo(userInfo);
  //       })
  //     );
  //   }, []);

  // function logout() {
  //   fetch('/logout', {
  //     credentials: 'include',
  //     method: 'POST',
  //   });
  //   setUserInfo(null);
  // }

  // const username = userInfo?.username;

  return (
    <div className='bg-white shadow flex justify-between '>
      {/* <Title> */}
      <header className='flex py-4 ml-5 w-13 transition ease-in-out delay-150  hover:-translate-y--1 hover:scale-110 hover: duration-300'>
        <Link to='/' className='mt-1.5'>
          <img
            className='object-scale-down h-11'
            src='https://i.ibb.co/2gxfCKh/owen.png'
            id='owen'
            alt='owen'
            border='0'
          />
        </Link>
        <h1
          className='container flex justify-between items-center py-1 px-1 font-montserrat text-3xl font-bold transition ease-in-out delay-150  hover:-translate hover:scale-100 hover: duration-300'
          font-montserrat>
          DealDex
        </h1>
      </header>
      <div className=' flex'>
        <button className=' flex w-24 h-12 mt-5 rounded-md text-base font-semibold bg-orange-300 cursor-pointer justify-center items-center mt-2'>
          login
        </button>
        <button className='flex w-24 h-12 mr-4 mt-5 rounded-md bg-gray-300 text-base font-semibold cursor-pointer justify-center items-center ml-2 mt-2'>
          signup
        </button>
      </div>
    </div>
  );
}
