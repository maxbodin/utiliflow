export const revalidate = 60

export async function GET() {
    try {
        const response = await fetch('https://api.vercel.app/blog');

        if (!response.ok) {
            return new Response("Failed to fetch blog posts", { status: response.status });
        }

        const posts = await response.json();
        console.log(posts)
        return Response.json(posts);
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
