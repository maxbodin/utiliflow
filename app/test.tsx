"use client";
import { fetch } from "@tauri-apps/plugin-http";
import { useState } from "react";
import {listen} from "@tauri-apps/api/event";
import { Image } from "@tauri-apps/api/image";
import {save} from "@tauri-apps/plugin-dialog";
import {writeFile} from "@tauri-apps/plugin-fs";

export default function Test() {
    const [isDragging, setIsDragging] = useState(false);

    async function convertWebPToPNG(webpFile) {
        try {
            const response = await fetch('/api/wepb-to-png', {
                method: 'POST',
                body: webpFile,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Convert response to a Uint8Array for Tauri compatibility
            const arrayBuffer = await response.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);

            // Prompt user for save location
          const savePath = await save({
                title: "Save Converted Image",
                defaultPath: "converted.png",
                filters: [{ name: "PNG Image", extensions: ["png"] }],
            });

          if(savePath)
                // Save the image to the specified location
                await writeFile(savePath, uint8Array);

        } catch (error) {
            console.error("Error during image conversion:", error);
        }
    }

    const handleDrop = async (event) => {
        console.log("TESTTS")
        event.preventDefault();
        setIsDragging(false);

        const file = event.dataTransfer.files[0];
        console.log(file)
        if (file && file.type === "image/webp") {
            await convertWebPToPNG(file);
        } else {
            alert("Please upload a valid WEBP image.");
        }
    };

    return (
        <div
            onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
            }`}
            style={{
                minHeight: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
        >
            <p>{isDragging ? "Drop your WEBP file here" : "Drag and drop a WEBP file to convert"}</p>
        </div>
    );
}
