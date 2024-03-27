"use client"
import React from "react";
import Mapbox from "@/components/ui/map";
import "../index.css"
import geoFindMe from "./lib/actions";



export default function Home() {


    return (
        <div>
            <div id="map">
                <Mapbox/>
            </div>
            
        </div>
    );
}


