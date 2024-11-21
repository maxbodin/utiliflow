import sharp from 'sharp';

export const revalidate = 60;

// Define the POST route to handle image processing.
export async function POST(request) {
    try {
        // Retrieve the image from the request body.
        const buffer = await request.arrayBuffer();
        const webpImage = Buffer.from(buffer);

        // Convert the WEBP image to PNG using sharp.
        const pngImage = await sharp(webpImage).png().toBuffer();

        // Return the PNG image as the response.
        return new Response(pngImage, {
            headers: {
                'Content-Type': 'image/png',
                'Content-Disposition': 'inline; filename="converted.png"',
            },
        });
    } catch (error) {
        console.error("Error processing image:", error);
        return new Response("Error processing image", { status: 500 });
    }
}
