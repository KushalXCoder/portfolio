import { Skeleton } from "../ui/skeleton"

const MusicLoader = () => {
  return (
    <div className="rounded-lg p-3 bg-zinc-100/50">
        <div className="flex items-end gap-3">
            <Skeleton className="h-20 w-20 rounded-lg" />
            <div className="flex flex-col gap-2">
                <Skeleton className="h-2 w-[120px]" />
                <Skeleton className="h-2 w-[100px]" />
            </div>
        </div>
    </div>
  )
}

export default MusicLoader