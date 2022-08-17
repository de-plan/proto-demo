import "./card.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Format } from "../../App";
import * as Geo from "../../data/proto_GeoNFT.json";
type CardProps = {
  events: Format;
};

const Card = ({events}:CardProps) => {

  const { id} = events;

  const navigate = useNavigate();

  return (
    <div>
      <div className="card-container">
        <div style={{
          display:"flex",
            borderRadius:`18px`,
            border: "white"}}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          style={{
            width: `130px`,
            height: `130px`,
            // clipPath: `polygon(50% 1%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)`,
            // background: "grey",

          }}
        />
        </div>
        <p className="detail">
          <b>{Geo.features[0].properties.name}</b>
          <br />
          <br />
          Goa, India
          <br />
          <br />
          <button
            onClick={() => {
              navigate("/Map");
            }}
          >
            View {">"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Card;
