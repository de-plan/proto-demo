import { insideCircle } from "geolocation-utils";
import React, { useState, useEffect, Fragment } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Circle from "react-google-maps/lib/components/Circle";
import * as geo from "../../data/proto_GeoNFT.json";
import { Feature, RootObject } from "../../json-data";
import Mint from "../Mint";
import "./Map.css"


const g: RootObject = geo;
 let location:Object|any;
 
//  var GeoMarker = new GeolocationMarker(Map);

navigator.geolocation.getCurrentPosition((position)=>{
  location={lat:position.coords.latitude,lon:position.coords.longitude};
  <InfoWindow defaultPosition={{lat:location.lat,lng:location.lng}}>
    <div>
      You are here
    </div>
  </InfoWindow>
  return location;

})

function Map() {
  const [selectedLoc, setSelectedLoc] = useState<Feature | null>();

  useEffect(() => {
    const listener = (e:any) => {
      if (e.key === "Escape") {
        setSelectedLoc(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);



  return (
   
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 20, lng: 0 }}
      defaultOptions={{
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: false,
      }}
    >
      
      {Object.values(g)[0].features.map((d:Feature) => (
        <Fragment key={d.properties.filename}>
          <Marker
            key={d.properties.filename}
            position={{
              lat: d.geometry.coordinates[1],
              lng: d.geometry.coordinates[0],
            }}
            onClick={() => {
              setSelectedLoc(d);
            }}
            icon={{
              url: `/skateboarding.svg`,
              scaledSize: new window.google.maps.Size(25, 25),
            }}
            animation={window.google.maps.Animation.DROP}
          />
          <Circle
            defaultCenter={{
              lat: d.geometry.coordinates[1],
              lng: d.geometry.coordinates[0],
            }}
            radius={d.properties.mint_radius}
            
          />
          </Fragment>
      ))}

{(selectedLoc && insideCircle(location,{lat:selectedLoc.geometry.coordinates[1],lon:selectedLoc.geometry.coordinates[0]},selectedLoc.properties.mint_radius)
     
     )  ? (<InfoWindow position={{lat: selectedLoc.geometry.coordinates[1],lng:selectedLoc.geometry.coordinates[0]}}><Mint/></InfoWindow>): null }
        

      {/* {selectedLoc && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedLoc(null);
          }}
          position={{
            lat: selectedLoc.geometry.coordinates[1],
            lng: selectedLoc.geometry.coordinates[0],
          }}
        >
          <div>
            <div>
              <b>proto GeoNFT beta</b>
            </div>
            <div>GeoNFT#{selectedLoc.properties.filename}</div>
            <div>Minting Radius: ${selectedLoc.properties.mint_radius} m</div>
            <div>
              <img src={selectedLoc.properties.photo} width="256" />
            </div>
            <div>
              <button type="button">Mint</button>
            </div>
          </div>
        </InfoWindow>
      )} */}
      
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}