import TabButton from "../button/button";
import classes from "./header.module.css";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

/**
 * Header component uses state to maintain active class in button 
 * @returns - Header component is returned
 */

const Header = () => {
  const tabHeadings = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const [selectedTopic,setSelectedTopic] = useState('New users');

  function clickHandler(buttonValue)
  {
      setSelectedTopic(buttonValue);
  }

  const navs = tabHeadings.map((val, index) => (
    <TabButton isSelected={selectedTopic===val} onSelect={()=>clickHandler(val)} key={index}>{val}</TabButton>
  ));

  return (
    <header>
      <h1 className="merriweather-black">Users</h1>
      <section className={classes['sub-head-section']}>
        <CiSearch className={classes['search-icon']} />
        <input className={classes['input-box']} placeholder="Search users"></input>
        <div className={classes["tab-button-wrapper"]}>{navs}</div>
      </section>
    </header>
  );
};

export default Header;
