
"use client"
import * as React from "react"
import { UserButton } from "@clerk/nextjs";
import Mapbox from "@/components/ui/map";
import GoogleMap from "@/components/ui/GoogleMap";
import "@/app/globals.css"
export default function Home() {
  
    
  
  return (
    
    <div className="h-screen">
      <UserButton />
      <GoogleMap/>
      
    </div>
  )
}

