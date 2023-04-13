import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '750px',
  height: '650px',
};

const CSU = {
  lat: 32.502447,
  lng: -84.940258
};

const infoWindowStyle = {
  color: 'black',
  padding: '10px',
  borderRadius: '5px',
  maxWidth: '200px',
  textAlign: 'center'
};

const infoWindowInputStyle = {
  padding: '10px 10px',
  border: '2px solid black',
  borderRadius: '5px'
}

const infoWindowBtnStyle = {
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  marginTop: '10px'
}

const infoWindowSaveBtnStyle = {
  backgroundColor: '#4CAF50',
}

const infoWindowDeleteBtnStyle = {
  backgroundColor: 'red',
}

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
        id='google-map'
        mapContainerStyle={containerStyle}
        center={CSU}
        zoom={11}
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
          <MarkerF id='selected-marker' key={marker} position={marker}>
            <InfoWindowF onCloseClick={() => {
              setMarker(null)
            }} position={marker}>
              <div style={infoWindowStyle}>
                <p>Latitude: {marker.lat.toFixed(6)}</p>
                <p>Longitude: {marker.lng.toFixed(6)}</p>
                <input style={infoWindowInputStyle} type="text" value={desc} onChange={handleDescriptionChange} placeholder="Enter description" />
                <button style={{...infoWindowSaveBtnStyle, ...infoWindowBtnStyle}} onClick={handleSavePointClick}>Save Point</button>
              </div>
            </InfoWindowF>
          </MarkerF>
        )}
        {selectedMarker && (
          <InfoWindowF
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div style={infoWindowStyle}>
              {console.log({selectedMarker})}
              <p>Latitude: {selectedMarker.lat.toFixed(6)}</p>
              <p>Longitude: {selectedMarker.lng.toFixed(6)}</p>
              <p>Description: {selectedMarker.desc}</p>
              <button style={{...infoWindowBtnStyle, ...infoWindowDeleteBtnStyle}} onClick={() => handleDeleteClick(selectedMarker._id)}>Delete Point</button>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(TrashMap)
