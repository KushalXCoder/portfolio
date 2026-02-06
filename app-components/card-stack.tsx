"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, PanInfo } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Disc3 } from "lucide-react";
import MusicLoader from "./hobbies/music-loader";
import { TrackData } from "@/types/songs.type";

type CardStackProps = {
    songs: TrackData[];
};

const CardStack = ({ songs }: CardStackProps) => {
  const [currIdx, setCurrIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);

  const handleDrag = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offsetX = info.offset.x;
    if (offsetX > 100) {
      setNextIdx(currIdx);
      setCurrIdx(prev => (prev + 1 + songs.length) % songs.length);
    } else if (offsetX < -100) {
      setNextIdx(currIdx);
      if(currIdx == 0) setCurrIdx(songs.length - 1);
      else setCurrIdx(prev => (prev - 1) % songs.length);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center mt-5 text-gray-500 text-sm">
        <p>
          <ArrowLeft className="inline h-4 w-4" />
          Back
        </p>
        <p>
          Forward
          <ArrowRight className="inline h-4 w-4" />
        </p>
      </div>
      <div className="relative h-26">
        {songs.length > 0 ? (
          <>
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={handleDrag}
              className="flex flex-col w-full absolute gap-2 inner-shadow bg-secondary rounded-lg p-3"
            >
              <div className="flex justify-between items-end gap-4">
                <div className="flex items-end gap-4">
                    <Image src={songs[nextIdx].album.images[0].url} alt="Poster" height={1000} width={1000} priority draggable={false} className="h-20 w-20 rounded-lg" />
                    <div>
                        <h1 className="text-lg">
                            <Link href={songs[nextIdx].external_urls.spotify} target="_blank" className="font-bold hover:text-green-600 hover:underline transition-all">
                                {songs[nextIdx].name}
                            </Link>
                        </h1>
                        <h3 className="text-gray-500 text-sm mt-[-3px]">by {songs[nextIdx].artists[0].name}</h3>
                    </div>
                </div>
                <Disc3 className="animate-spin" />
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={handleDrag}
              className="flex flex-col w-full absolute gap-2 inner-shadow bg-secondary rounded-lg p-3"
            >
              <div className="flex justify-between items-end gap-4">
                <div className="flex items-end gap-4">
                    <Image src={songs[currIdx].album.images[0].url} alt="Poster" height={1000} width={1000} priority draggable={false} className="h-20 w-20 rounded-lg" />
                    <div>
                        <h1 className="text-lg">
                            <Link href={songs[currIdx].external_urls.spotify} target="_blank" className="font-bold hover:text-green-600 hover:underline transition-all">
                                {songs[currIdx].name}
                            </Link>
                        </h1>
                        <h3 className="text-gray-500 text-sm mt-[-3px]">by {songs[currIdx].artists[0].name}</h3>
                    </div>
                </div>
                <Disc3 className="animate-spin" />
              </div>
            </motion.div>
          </>
        ) : (
          <MusicLoader />
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 max-sm:text-sm">
            Powered by
            <span className="text-green-500">{" "}Spotify</span>
        </p>
        <p className="inner-shadow border border-dashed rounded-lg px-3 py-1 text-sm">{currIdx + 1}</p>
      </div>
    </div>
  )
}

export default CardStack