
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as dotenv from 'dotenv'





 


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPS_API_KEY

export default function Mapbox() {
    const mapContainer = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom,setZoom] = useState(9)

    useEffect(() => {
        if (map.current) return

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style:'mapbox://styles/mapbox/streets-v12',
            center: [lng,lat],
            zoom: zoom
        })
    })
    

    return (
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>
      );
}

