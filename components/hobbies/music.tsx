"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CardStack from "../card-stack";
import { SongData, TrackData } from "@/types/songs.type";

const MusicBox = () => {
  const [songs, setSongs] = useState<TrackData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchSong = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/get-song');
            const data = await res.json();

            if(res.ok) {
                console.log("Fetched song data:", data);
                setSongs(data.data.items.slice(0,5).map((item: SongData) => item.track));
                setLoading(false);
                return;
            }

            // setLoading(false);
            console.log("Error fetching song data", data);
        } catch (error) {
            // setLoading(false);
            console.log("Error fetching song data", error);
        }
    }
    fetchSong();
  }, []);

  useEffect(() => {
    console.log("Current song data:", songs);
  }, [songs]);

  return (
    <div className="relative">
        <div className="flex items-center gap-2">
            <Image src="/companies/spotify.svg" alt="Spotify" height={1000} width={1000} draggable={false} priority className="h-7 w-7" />
            <h1 className="text-2xl font-bold">Music</h1>
        </div>
        <p className="text-primary/70">Here, is my taste in music. (Swipe to see the lastest 5 heard songs)</p>

        <CardStack songs={songs} />
    </div>
  )
}

export default MusicBox