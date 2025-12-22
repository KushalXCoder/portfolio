import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import MusicBox from "./music";

const Hobbies = () => {
  return (
    <div className="mt-5">
        <h3 className="text-gray-500">Hobbies</h3>
        <MusicBox />
    </div>
  )
}

export default Hobbies