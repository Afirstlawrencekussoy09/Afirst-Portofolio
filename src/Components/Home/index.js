import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Home = () => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <div className="section" id="home" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="disply-table">
          <div className="table-cell" data-aos="fade-up" data-aos-delay={0}>
            <h4>{home.home1}</h4>
            <h1>{home.home2}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
