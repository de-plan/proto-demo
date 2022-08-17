import Card from "../Card/card";
import React from "react";
import "./card-list.css";
import { Format } from "../../App";

type CardListProps = {
  events: Format[];
};

const CardList = ({ events }: CardListProps) => (
  <div className='card-list'>
    Active Mints
    {events.map((event) => {
      return <Card key={event.id} events={event} />;
    })}
  </div>
);

 export default CardList;
