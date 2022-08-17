import React from "react";
import { useNavigate } from "react-router-dom";
import "./Popup.css";
//import ActiveMints from "../Card-List/active-mints";
//import Card from "../Card/card";
const Popup = (props: any) => {
  const navigate = useNavigate();

  return (
    <div>
      {props.trigger ? (
        <div className="popup-box">
          <div className="box">
            <span
              className="close-icon"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              x
            </span>
            <p
              style={{
                textAlign: "center",
                background: `#101010`,
                fontSize: `30px`,
                paddingTop: `18px`,
                paddingBottom:`30px`
              }}
            >
              proto
            </p>
        
            <p
              style={{
                textAlign: "center",
                background: `#101010`,
                paddingLeft: `25px`,
                paddingRight: `25px`,
                fontSize: `20px`,
                fontFamily: `'Turret Road','Saira', sans-serif`,
                paddingBottom:`30px`
              }}
            >
              GeoNFT Map Loading...
<br/>

Once Loaded, zoom-in to your region to search for your closest GeoNFTs; you will have to be within the Mint Radius of a GeoNFT to access the minting interface and mint the GeoNFT. Click on a marker once you are inside the GeoNFT Mint Radius to access Candy Machine and mint your GeoNFT. 
<br/>
<p style={{color: "grey"}}>Red Markers on the map indicate GeoNFT positions and their minting radii are indicated by grey circles. 
Geolocation is masked to protect your privacy.</p>
            </p>
            <p
              style={{
                textAlign: "center",
                background: `#101010`,
                paddingTop: `25px`,
              }}
            >
              <button
                style={{
                  textAlign: "center",
                  fontSize: `17px`,
                  background: `#FFF`,
                  height: `52px`,
                  width: `165px`,
                  left: `131px`,
                  top: `486px`,
                  borderRadius: `5px`,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Map")}
              >
                <b style={{ background: `#FFF`, color: `#000`,fontFamily: `'Turret Road','Saira', sans-serif` }}>Enter {">"}</b>
              </button>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Popup;
