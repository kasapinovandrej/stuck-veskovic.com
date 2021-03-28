import React from 'react';
import dataAboutUs from '../../Data/dataAboutUs';
import MapComponent from './MapComponent';

const Location = () => {
    const { latitude, longitude } = dataAboutUs
    return (
        <div>
            <h2>unsere position</h2>
            <h3 style={{ fontWeight: '300' }}>{dataAboutUs.address}</h3>
            <MapComponent lat={latitude} lng={longitude} />
        </div>
    )
}

export default Location;
