import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const CSU = {
  lat: 32.502447,
  lng: -84.940258
};

function TrashMap() {
  const [marker, setMarker] = useState(null);
  const [desc, setDescription] = useState('');
  const [pins, setPins] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarker({ lat, lng });
    setSelectedMarker(null)
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSavePointClick = () => {
    if (marker && desc) {
      // axios.post('http://localhost:3000/api/addPin', {
      axios.post('https://trashbusters-backend.onrender.com/api/addPin', {
        lat: marker.lat,
        lng: marker.lng,
        desc: desc
      })
      .then((response) => {
        console.log(response.data)
        const newPin = { 
          _id: response.data._id,
          lat: marker.lat, 
          lng: marker.lng, 
          desc: desc};
        setPins([...pins, newPin]);
        setMarker(null);
        setDescription('');
      })
      .catch((error) => {
        console.log(error);
      });
      setMarker(null);
    }
  };

  const handleDeleteClick = (_id) => {
    console.log(`posting id: ${_id}`)
    // axios.delete(`http://localhost:3000/api/deletePin/${_id}`)
    axios.delete(`https://trashbusters-backend.onrender.com/api/deletePin/${_id}`)
      .then(() => {
        console.log(pins)
        setPins(pins.filter(pin => pin._id !== _id));
        console.log(pins)
      })
      .catch((error) => {
        console.log(error);
      });
      setSelectedMarker(null);
  }

  useEffect(() => {
    // axios.get('http://localhost:3000/api/getPins')
    axios.get('https://trashbusters-backend.onrender.com/api/getPins')
      .then((response) => {
        setPins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAUJ9Qj6tUo8_wl-ODJ3Ddm5LQPRztaguI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={CSU}
        zoom={10}
        onClick={handleMapClick}
      >

        {pins.map((pin, index) => (
          <MarkerF 
            key={index} 
            position={{ lat: pin.lat, lng: pin.lng }}
            onClick={() => setSelectedMarker(pin)}>
          </MarkerF>
        ))}

        {marker && (
          <MarkerF key={marker} position={marker}>
            <InfoWindowF onCloseClick={() => {
              setMarker(null)
            }} position={marker}>
              <div>
                <h3>Latitude: {marker.lat.toFixed(6)}</h3>
                <h3>Longitude: {marker.lng.toFixed(6)}</h3>
                <label>Description:</label>
                <input type="text" value={desc} onChange={handleDescriptionChange} placeholder="Enter description" />
                <button onClick={handleSavePointClick}>Save Point</button>
              </div>
            </InfoWindowF>
          </MarkerF>
        )}
        {selectedMarker && (
          <InfoWindowF
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              {console.log({selectedMarker})}
              <h3>Latitude: {selectedMarker.lat.toFixed(6)}</h3>
              <h3>Longitude: {selectedMarker.lng.toFixed(6)}</h3>
              <p>Description: {selectedMarker.desc}</p>
              <button onClick={() => handleDeleteClick(selectedMarker._id)}>Delete Point</button>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(TrashMap)
