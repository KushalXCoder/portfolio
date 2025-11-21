import { NextResponse } from "next/server";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

export const GET = async () => {
    try {
        const params = new URLSearchParams();
        params.append("grant_type", "refresh_token");
        params.append("refresh_token", REFRESH_TOKEN!);

        const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
            },
            body: params,
        });

        const tokenJson = await tokenResponse.json();
        const access_token = tokenJson.access_token;

        const res = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
            headers: {
            Authorization: `Bearer ${access_token}`,
            },
        });

        const data = await res.json();
        return NextResponse.json({ message: "Song found successfully", data: data }, { status: 200 });
    } catch (error) {
        console.log("Error fetching access token or now playing:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}