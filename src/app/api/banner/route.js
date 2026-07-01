import music from "../../../../Component/Data.js"
const {musicBanner} =music
export async function GET(req, res) {
    return new Response(JSON.stringify(musicBanner), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
