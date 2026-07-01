import music from "../../../../Component/Data.js"
const {musicList} =music
export async function GET(req, res) {
    return new Response(JSON.stringify(musicList), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
