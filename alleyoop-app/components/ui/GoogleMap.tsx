'use client'
import React, {useEffect} from "react"
import { Loader } from '@googlemaps/js-api-loader'
import { info } from "console"


let infoWindow: google.maps.InfoWindow

export default function GoogleMap () {

    // const lat  = navigator.geolocation.getCurrentPosition((position) =>  console.log(position.coords.latitude as number)) 
    // const lng  = navigator.geolocation.getCurrentPosition((position) =>  console.log(position.coords.longitude as number))

    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect( () => {
        const initializeMap = async  () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
                version: 'quartely',
            });
            const { Map } = await loader.importLibrary('maps');

            const locationInMap =  {
                lat:40.753, 
                lng: -73.983
            };

            // Marker


            const options: google.maps.MapOptions = {
                center: locationInMap,
                zoom: 14,
                mapId: "Next_MAPS_TUTS",
            };


            const map = new Map(mapRef.current as HTMLDivElement, options)

            
        }





        initializeMap()
    }, [])



    return (
        <div className="h-[600px]" ref={mapRef}>Google Map</div>
    )
}