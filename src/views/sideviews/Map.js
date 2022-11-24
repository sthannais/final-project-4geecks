import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { sendor } from "../../data/sensor";
import { icon } from "../../data/icon";
import Autocomplete from "react-google-autocomplete";
import saveImg from "../../helper/saveImg";
import "../../styles/Map.css";

const Map = () => {
  console.log("iconooo", icon);
  const [position, setPosition] = useState([-33.4510528, -70.6347008]);
  const [marker, setMarker] = useState(sendor);
  const [location, setLocation] = useState({});
  const [change, setChange] = useState();
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [disablebButton, setDisabledButton] = useState(true);

  const RecenterAutomatically = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  };

  function success(posicion) {
    console.log("....");
    console.log(posicion.coords.latitude, posicion.coords.longitude);
    console.log("....");
    setPosition([posicion.coords.latitude, posicion.coords.longitude]);
    console.log("Seguimoss");
    setLocation({
      Lat: posicion.coords.longitude,
      Long: posicion.coords.latitude,
      data: {
        status: "In progres",
      },
    });
    console.log("location", location);
    let api = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    console.log(api);
  }

  function error() {
    console.log("No hay posición disponible.");
  }

  useEffect(() => {
    const opciones = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
    navigator.geolocation.watchPosition(success, error, opciones);
  }, []);

  const saveReport = () => {
    console.log("location", location);
    location.data.description = change;
    location.data.title = title;
    location.data.url = img;
    const newMarker = [...marker.sensors, location];
    console.log(location, "soy location");
    console.log("soy un new marker", newMarker);
    const arraySendor = {
      sensors: newMarker,
    };
    setMarker(arraySendor);
  };

  const changeInput = (event) => {
    setChange(event.target.value);
    console.log(event.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const changeImg = async (e) => {
    console.log(e.target.files[0]);
    const { secure_url } = await saveImg(e.target.files[0]);
    setDisabledButton(false);
    console.log("aca estoy", secure_url);
    setImg(secure_url);
  };

  return (
    <div className="container-sm">
      <div className="d-flex justify-content-center">
        <div className="report col-4 p-4 mt-5 mx-4 bg-light border rounded-3">
          <div className="reportbox">
            <div className="mb-3 col">
              <Autocomplete
                className="form-control"
                apiKey={"AIzaSyBZKd9Y_ODlR1FJDtT-r3XVIL9o_Y6phWE"}
                onPlaceSelected={(place) => {
                  const latitud = place.geometry.location.lat();

                  const longitud = place.geometry.location.lng();

                  console.log("latitude", latitud);
                  console.log("longitude", longitud);
                  setPosition([parseFloat(latitud), parseFloat(longitud)]);
                  console.log("position", position);
                  console.log(place.geometry.location.lat());
                  setLocation({
                    Lat: longitud,
                    Long: latitud,
                    data: {
                      status: "In progres",
                    },
                  });
                }}
                options={{
                  types: [],
                }}
              />
            </div>

            <div className="mb-3">
              <input
                onChange={changeTitle}
                value={title}
                placeholder="Pothole Title"
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <div className="col mt-4">
              <label className="form-label">
                Enter a comment for your report.
              </label>
              <textarea
                onChange={changeInput}
                value={change}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                maxLength="100"
              ></textarea>
            </div>
            <div className="col mt-4">
              <label htmlFor="formFile" className="form-label">
                Enter photo of your pothole.
              </label>
              <input
                onChange={changeImg}
                className="form-control"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={saveReport}
              type="button"
              className="btn btn-primary mt-3"
              disabled={disablebButton}
            >
              Send Report
            </button>
          </div>
        </div>
        <div className="mapbox col-md-6 mt-5">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marker.sensors.length > 0 &&
              marker.sensors.map((park, index) => (
                <Marker
                  icon={icon}
                  key={index}
                  position={[parseFloat(park.Long), parseFloat(park.Lat)]}
                >
                  <Popup>
                    {park.data.title} <br /> {park.data.description}
                    <br />
                    status:{park.data.status} <br />
                    <img className="imagen" src={park.data.url} />
                  </Popup>
                </Marker>
              ))}
            <RecenterAutomatically lat={position[0]} lng={position[1]} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
