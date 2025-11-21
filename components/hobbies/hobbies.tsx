import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import MusicBox from "./music";

const Hobbies = () => {
  return (
    <div className="mt-5">
        <h3 className="text-gray-500">Hobbies</h3>

        <MusicBox />

        <h1 className="text-2xl font-bold mt-5">Films and Web Shows</h1>
        <p className="text-primary/70">Same hobby as mine ? here are few of mine recommendations. From, sitecom to thriller, I am a fan of all.</p>

        <div className="mt-5 flex items-center">
            <Tooltip>
                <TooltipTrigger>
                    <Image src="/movies-and-webshows/moneyheist.jpg" alt="Money Heist" height={1000} width={1000}  priority draggable={false} className="h-40 w-30" />
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm font-poppins">Money Heist</p>
                </TooltipContent>
            </Tooltip>
        </div>
    </div>
  )
}

export default Hobbies