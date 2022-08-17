export interface Properties {
  photo: string;
  filename: string;
  longitude: string;
  latitude: string;
  mint_radius: number;
  name: string;
  symbol: string;
  description: string;
  sell_fee_bp: number;
  collection_name: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface RootObject {
  features: Feature[];
}

export interface Viewport {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}

export interface Coords {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: string;
  speed: number;
}

export interface positionOptions {
  coords: Coords;
}

export interface center{
  lat: number;
  lon: number;
}

export interface locs{
  lat: number;
  lon: number;
}

export interface Root{
  type:string;
  features:Features[];
}

export interface Features{
  type:string;
  geometry: Geometry1;
}

export interface Geometry1{
  type:string;
  coordinates:any[];
}
