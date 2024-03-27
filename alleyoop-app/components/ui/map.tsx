
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'; 
import * as dotenv from 'dotenv'
import { error } from 'console';



// const userLng = navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position.coords.longitude)
// })

// const userLat = navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position.coords.latitude)
// })


function myLat() {
    const userLat = navigator.geolocation?.getCurrentPosition((position) => {
        console.log(position.coords.latitude)
    })
    return userLat
}

function myLng() {
    const userLng = navigator.geolocation?.getCurrentPosition((position) => {
        console.log(position.coords.longitude)
    })
    return userLng
}


 mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPS_API_KEY



export default function Mapbox() {
 
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if(map.current) return
        

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        map.current?.addControl(new mapboxgl.GeolocateControl({
            
            positionOptions: {
                enableHighAccuracy: true
            },

            trackUserLocation: true,

            showUserHeading: true
        }))
    });
    

    return (
        <div id="map">
             <div ref={mapContainer} className="map-container" />
        </div>
    )
}
