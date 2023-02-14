import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const CSU = {
  lat: 32.502447,
  lng: -84.940258
};

function TrashMap() {
  const [marker, setMarker] = useState(null);
  const [description, setDescription] = useState('');

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarker({ lat, lng });
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSavePointClick = () => {
    if (marker && description) {
      // axios.post('YOUR_API_ENDPOINT_URL', {
      //   latitude: marker.lat,
      //   longitude: marker.lng,
      //   description: description
      // })
      // .then((response) => {
      //   console.log(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      console.log(marker)
      console.log(description)
    }
  };

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
        {marker && (
          <>
            <Marker position={marker} />
            <InfoWindow position={marker}>
              <div>
                <h3>Latitude: {marker.lat.toFixed(6)}</h3>
                <h3>Longitude: {marker.lng.toFixed(6)}</h3>
                <label>Description:</label>
                <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Enter description" />
                <button onClick={handleSavePointClick}>Save Point</button>
              </div>
            </InfoWindow>
          </>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(TrashMap)
