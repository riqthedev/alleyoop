"use client"
import React from "react";
import Mapbox from "@/components/ui/map";
import "../index.css"
export default function Home() {


    return (
        <div id="map">
            <div>
                <Mapbox/>
            </div>
        </div>
    );
}


