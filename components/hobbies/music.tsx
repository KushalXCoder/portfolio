"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

type AlbumData = {
    name: string;
    external_urls: { spotify: string };
    images: ImageData[];
    artists: ArtistsData[];
}

type ImageData = {
    height: number,
    width: number,
    url: string,
};

type ArtistsData = {
    name: string,
};

const MusicBox = () => {
  const [song, setSong] = useState<AlbumData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchSong = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/get-song');
            const data = await res.json();

            if(res.ok) {
                console.log("Fetched song data:", data);
                setSong(data.data.items[0].track.album);
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
    console.log("Current song data:", song);
  }, [song]);

  return (
    <>
        <div className="flex items-center gap-2">
            <Image src="/spotify.svg" alt="Spotify" height={1000} width={1000} draggable={false} priority className="h-7 w-7" />
            <h1 className="text-2xl font-bold">Music</h1>
        </div>
        <p className="text-primary/70">Here, is my taste in music.</p>

        <div className="flex flex-col gap-2 inner-shadow bg-secondary rounded-lg p-3 mt-3">
            {loading ? (
                <div>
                    <Skeleton className="h-20 w-20 rounded-lg" />
                </div>
            ) : song ? (
                <div className="flex items-end gap-4">
                    <Image src={song?.images[0].url} alt="Poster" height={1000} width={1000} priority draggable={false} className="h-20 w-20 rounded-lg" />
                    <div>
                        <h1 className="text-lg">
                            <Link href={song.external_urls.spotify} target="_blank" className="font-bold hover:text-green-600 hover:underline transition-all">
                                {song.name}
                            </Link>
                        </h1>
                        <h3 className="text-gray-500 text-sm mt-[-3px]">by {song.artists[0].name}</h3>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500">No recent song found.</p>
            )}
        </div>
        <p className="text-gray-500 mt-1">
            Powered by
            <span className="text-green-500">{" "}Spotify</span>
        </p>
    </>
  )
}

export default MusicBox