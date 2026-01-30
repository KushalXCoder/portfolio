import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Active = () => {
  return (
    <HoverCard>
        <HoverCardTrigger>
            <div className='h-7 w-7 bg-background shadow border flex justify-center items-center rounded-full absolute bottom-1 right-3 hover:scale-105 transition-all'>
                <div className='h-3 w-3 bg-green-500 rounded-full'></div>
            </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
            <div className="flex justify-between gap-4 font-poppins">
                <div className="space-y-1">
                    <h1 className="text-sm font-semibold">Status - Looking for oppurtunities</h1>
                    <p className="text-sm">
                        Ex-Frontend Intern at Club Duelz - A football community platform.
                    </p>
                    <div className="text-muted-foreground text-xs">
                        Sept 2025 - Dec 2025
                    </div>
                </div>
            </div>
        </HoverCardContent>
    </HoverCard>
  )
}

export default Active