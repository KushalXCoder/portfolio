"use client";

import { AlbumData } from "@/types/songs.type"
import Image from "next/image";
import Link from "next/link";
import { motion, PanInfo } from "motion/react";
import { useState } from "react";

type CardStackProps = {
    songs: AlbumData[];
};

const CardStack = ({ songs }: CardStackProps) => {
  const [currIdx, setCurrIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);

  const handleDrag = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (e instanceof TouchEvent) {
      const touch = e.touches[0];
      console.log(
        "Dragging",
        touch.clientX.toFixed(),
        touch.clientY.toFixed()
      );
    } else {
      if (Number(e.clientX.toFixed()) > 1500) {
        setNextIdx(currIdx);
        setCurrIdx((prevIdx) => (prevIdx + 1) % songs.length);
      }
      console.log(
        "Dragging",
        e.clientX.toFixed(),
        e.clientY.toFixed()
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 relative h-26 mt-5">
        {songs.length > 0 && (
          <>
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={handleDrag}
              className="flex flex-col w-full absolute gap-2 inner-shadow bg-secondary rounded-lg p-3"
            >
              <div className="flex items-end gap-4">
                  <Image src={songs[currIdx].images[0].url} alt="Poster" height={1000} width={1000} priority draggable={false} className="h-20 w-20 rounded-lg" />
                  <div>
                      <h1 className="text-lg">
                          <Link href={songs[currIdx].external_urls.spotify} target="_blank" className="font-bold hover:text-green-600 hover:underline transition-all">
                              {songs[currIdx].name}
                          </Link>
                      </h1>
                      <h3 className="text-gray-500 text-sm mt-[-3px]">by {songs[currIdx].artists[0].name}</h3>
                  </div>
              </div>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={handleDrag}
              className="flex flex-col w-full absolute gap-2 inner-shadow bg-secondary rounded-lg p-3"
            >
              <div className="flex items-end gap-4">
                  <Image src={songs[nextIdx].images[0].url} alt="Poster" height={1000} width={1000} priority draggable={false} className="h-20 w-20 rounded-lg" />
                  <div>
                      <h1 className="text-lg">
                          <Link href={songs[nextIdx].external_urls.spotify} target="_blank" className="font-bold hover:text-green-600 hover:underline transition-all">
                              {songs[nextIdx].name}
                          </Link>
                      </h1>
                      <h3 className="text-gray-500 text-sm mt-[-3px]">by {songs[nextIdx].artists[0].name}</h3>
                  </div>
              </div>
            </motion.div>
          </>
        )}
        <p>Loadng...</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 mt-1">
            Powered by
            <span className="text-green-500">{" "}Spotify</span>
        </p>
        <p className="inner-shadow border border-dashed rounded-lg px-3 py-1">{currIdx + 1}</p>
      </div>
    </div>
  )
}

export default CardStack