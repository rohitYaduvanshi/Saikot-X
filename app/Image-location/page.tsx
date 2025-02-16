"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import dynamic from "next/dynamic";

// 🔹 Dynamic Import of exif-js
const EXIF = dynamic(() => import("exif-js"), { ssr: false });

export default function ImageLocation() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [location, setLocation] = useState<string>("Location will appear here...");

    const onDrop = (acceptedFiles: File[]) => {
        console.log("File dropped:", acceptedFiles);
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    const imageSrc = e.target.result as string;
                    console.log("Image loaded successfully");
                    setImagePreview(imageSrc);
                    extractGPS(imageSrc);
                }
            };
            reader.readAsDataURL(file);
        } else {
            console.error("No file detected!");
        }
    };

    // 📍 Extract GPS Data
    const extractGPS = async (imageSrc: string) => {
        console.log("Extracting GPS data...");
        const img = new Image();
        img.src = imageSrc;
        img.onload = async () => {
            try {
                const exifLib = await import("exif-js"); // 🔹 Correct way to import dynamically
                console.log("EXIF Loaded:", exifLib);

                exifLib.getData(img, function () {
                    const lat = exifLib.getTag(this, "GPSLatitude");
                    const lon = exifLib.getTag(this, "GPSLongitude");
                    console.log("Extracted GPS:", { lat, lon });

                    if (lat && lon) {
                        const latitude = convertToDecimal(lat);
                        const longitude = convertToDecimal(lon);
                        getAddress(latitude, longitude);
                    } else {
                        setLocation("❌ GPS data not found in image.");
                    }
                });
            } catch (error) {
                console.error("❌ Error loading EXIF data:", error);
                setLocation("❌ Error reading image metadata.");
            }
        };
        img.onerror = () => console.error("Image failed to load!");
    };

    // 🔢 Convert GPS Coordinates to Decimal
    const convertToDecimal = (gpsData: any) => {
        return gpsData[0] + gpsData[1] / 60 + gpsData[2] / 3600;
    };

    // 🌍 Fetch Address from Mapbox API
    const getAddress = async (lat: number, lon: number) => {
        const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
        if (!accessToken) {
            console.error("❌ Mapbox API key is missing!");
            setLocation("❌ Error: API key missing.");
            return;
        }

        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${accessToken}`;

        try {
            console.log("Fetching address from Mapbox...");
            const response = await fetch(url);
            const data = await response.json();
            console.log("Mapbox Response:", data);

            if (data.features.length > 0) {
                setLocation(`📍 ${data.features[0].place_name}`);
            } else {
                setLocation("⚠️ Address not found.");
            }
        } catch (error) {
            console.error("❌ Error fetching address:", error);
            setLocation("❌ Error fetching location.");
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-5">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
                Upload Image to Get Location
                <br />
                <span className="text-red-500 text-lg font-semibold">
                    (If User gives the wrong location during report submission)
                </span>
            </h1>


            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-600 hover:border-blue-400 p-12 my-6 w-96 text-center cursor-pointer transition-all duration-300 rounded-lg"
            >
                <input {...getInputProps()} accept="image/*" />
                <p className="text-lg text-gray-300">Drag & Drop an Image here, or Click to Select</p>
            </div>

            {imagePreview && (
                <div className="mt-6">
                    <img src={imagePreview} alt="Uploaded Preview" className="w-60 rounded-lg shadow-lg border border-gray-600" />
                </div>
            )}

            <div className="mt-6 p-4 bg-gray-900 text-white rounded-lg shadow-lg w-96">
                <p className="text-lg font-semibold text-gray-300">Detected Location:</p>
                <p className="text-blue-400 font-mono">{location}</p>
            </div>
        </div>
    );
}
