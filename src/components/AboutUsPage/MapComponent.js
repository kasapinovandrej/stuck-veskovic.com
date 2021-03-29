import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = (props) => {
    return (
        <div className="wrap">
            <MapContainer center={[props.lng, props.lat]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.lng, props.lat]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default MapComponent
