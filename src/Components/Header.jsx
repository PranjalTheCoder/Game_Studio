// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import logo2 from './../assets/Images/logo2.png';
import { HiSun, HiMoon, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext'; // Ensure this import is correct

function Header() {
  // const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext); // Access theme and setTheme from context

  useEffect(() => {
    console.log("Theme", theme);
  }, [theme]); // Log theme changes

  return (
    <div className='flex items-center p-3'>
      <img src={logo2} width={60} height={60} alt="Logo" />
      <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
        <HiOutlineMagnifyingGlass className='text-blue-500 transform scale-125' />
        <input 
          type="text" 
          className='px-2 bg-transparent outline-none' 
          placeholder="Search Games" 
        />
      </div>
      <div>
        {theme === 'light' ? (
          <HiMoon 
            className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
            onClick={() => {setTheme('dark');
              localStorage.setItem('theme', 'dark')
            }}
          />
        ) : (
          <HiSun 
            onClick={() =>{setTheme('light');
              localStorage.setItem('theme', 'light')
            }}
            className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' 
          />
        )}
      </div>
    </div>
  );
}

export default Header;
