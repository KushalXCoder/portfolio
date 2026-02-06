import Image from "next/image";
import MusicBox from "./music";

const Hobbies = () => {
  return (
    <div className="mt-5">
        <h3 className="text-sm text-gray-500">Hobbies</h3>
        <div className="flex items-center gap-1 md:gap-2">
            <Image src="/companies/spotify.svg" alt="Spotify" height={1000} width={1000} draggable={false} priority className="size-6 md:size-7" />
            <h1 className="text-xl md:text-2xl font-bold">Music</h1>
        </div>
        <p className="text-primary/70 max-sm:text-sm max-sm:mt-1">Here, is my taste in music. (Swipe to see the lastest 5 heard songs)</p>
        <MusicBox />
    </div>
  )
}

export default Hobbies