"use client";

import { Button } from "../ui/button"
import { useUserStore } from "@/store/user.store";

const UserCommandButton = () => {
    const { setOpen } = useUserStore();
    
    return (
        <div
            className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1 inner-shadow text-sm text-black hover:bg-secondary group dark:text-white/60"
            onClick={() => setOpen(true)}
        >
            Search
            <button className="bg-primary-foreground border rounded-sm px-2 py-0.5 inner-shadow group-hover:bg-secondary">Ctrl + S</button>
        </div>
    )
}

export default UserCommandButton;