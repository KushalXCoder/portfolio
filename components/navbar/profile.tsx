import Image from "next/image"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type ProfileProps = {
  height: number;
  width: number;
  className?: string;
};

const Profile = ({ height, width, className } : ProfileProps) => {
  return (
    <Tooltip>
        <TooltipTrigger className="block">
            <Image
              src="/profile.jpg"
              alt="Profile"
              height={1000}
              width={1000}
              draggable={false}
              priority
              className={`${className}`}
              style={{ height: height, width: width }}
            />
        </TooltipTrigger>
        <TooltipContent className="font-poppins">
            Dali Mask
        </TooltipContent>
    </Tooltip>
  )
}

export default Profile