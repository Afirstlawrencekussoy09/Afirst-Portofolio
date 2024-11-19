import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Header = () => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <header className="navbar-fixed-top">
      <nav>
        <ul>
          <li>
            <a href="#about">{header.header1}</a>
          </li>
          <li>
            <a href="#education">{header.header2}</a>
          </li>
          <li>
            <a href="#projects">{header.header}</a>
          </li>
          <li>
            <a href="#contact">{header.header3}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
