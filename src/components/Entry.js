import React from "react";
import locationMarker from "../images/marker.png";

export default function Entry(props) {
  console.log(props)
  return (
    <div className="entry-container">
      <img
        className="scene"
        src={props.img.src}
        alt={props.img.alt}
      />
      <div className="entry-info">
        <h2 className="maps-container">
          <img
            className="location-marker"
            src={locationMarker}
            alt="location marker"
          />
          <span className="country">{props.country}</span>
          <a className="google-maps-link" href="">
            View on Google Maps
          </a>
        </h2>
        <h2 className="entry-title">{props.title}</h2>
        <p className="dates">{props.dates}</p>
        <p className="text">
          {props.text}
        </p>
      </div>
    </div>
  );
}
