import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import "./Home.css";

function Home() {
  const [showPopup, setshowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshowPopup(!showPopup);
    }, 0);
  }, []);

  return (
    <div className="home">
      <div className="intro">
        &nbsp;proto
        <br />
        <br />
        <br />
        <br />
        de_plan
      </div>
      {showPopup && <Popup trigger={showPopup} setTrigger={setshowPopup} />}
    </div>
  );
}

export default Home;
