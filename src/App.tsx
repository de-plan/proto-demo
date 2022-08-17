import "./index.css";
//import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import React,{useState,useEffect} from "react";
//import Card from "./components/Card/card";
//import CardList from "./components/Card-List/active-mints";
import Map from "./components/Map/Map";
import Home from "./components/Home/Home";
export type Format = {
  id: string;
};

function App() {
  // const [events, setEvents] = useState<Format[]>([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {setEvents(data)});
  //     }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
