"use client";

import { Button } from "../ui/button"
import { useUserStore } from "@/store/user.store";

const UserCommandButton = () => {
    const { setOpen } = useUserStore();
    
    return (
        <Button
            className="bg-primary-foreground inner-shadow text-black hover:bg-secondary group"
            onClick={() => setOpen(true)}
        >
            Search
            <button className="bg-primary-foreground border rounded-sm px-2 py-0.5 inner-shadow group-hover:bg-secondary">Ctrl + S</button>
        </Button>
    )
}

export default UserCommandButton;