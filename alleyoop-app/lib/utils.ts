import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mapboxgl from 'mapbox-gl';
import * as dotenv from 'dotenv'




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




