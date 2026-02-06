"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CardStack from "../card-stack";
import { SongData, TrackData } from "@/types/songs.type";

const MusicBox = () => {
  const [songs, setSongs] = useState<TrackData[]>([]);
  
  useEffect(() => {
    const fetchSong = async () => {
        try {
            const res = await fetch('/api/get-song');
            const data = await res.json();

            if(res.ok) {
                console.log("Fetched song data:", data);
                setSongs(data.data.items.slice(0,5).map((item: SongData) => item.track));
                return;
            }
            console.log("Error fetching song data", data);
        } catch (error) {
            console.log("Error fetching song data", error);
        }
    }
    fetchSong();
  }, []);

  return (
    <div className="relative">
      <CardStack songs={songs} />
    </div>
  )
}

export default MusicBox