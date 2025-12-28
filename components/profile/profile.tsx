import React from 'react'
import Active from '../active'
import ChangingName from '../changing-name'
import { BadgeCheck } from 'lucide-react'
import Speaker from '../speaker'
import Setting from '../about-me/settings'
import TextDisplay from '../text-display'
import Profile from '../navbar/profile'

const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.2)_0,rgba(255,255,255,0.04)_2px,transparent_2px,transparent_6px)]";

const ProfileImage = () => {
    return (
        <div className={`relative border dark:border-zinc-700 min-w-30 sm:min-w-38 ${gradient}`}>
            <Profile className={`size-30 sm:size-38 rounded-full border dark:border-zinc-700 leading-none`} />
            <Active />
        </div>
    )
}

const ProfileSection = () => {

  return (
    <>
        <div className="w-full h-fit flex flex-col items-start md:items-baseline-last md:h-38 md:flex-row">
            <ProfileImage />
            <div className="flex flex-col justify-end h-full w-full">
                <div className={`w-full h-full ${gradient} hidden md:block`}></div>
                <div className="flex w-full h-12 md:h-35 justify-between items-center px-4 border border-b-0 md:border-l-0 dark:border-zinc-700">
                    <div className="flex w-full items-center gap-2 overflow-y-hidden">
                        <ChangingName name='Kushal Rathod' />
                        <BadgeCheck className="fill-blue-500 size-5 md:size-6 " />
                        <Speaker name="Kushal Rathod" />
                    </div>
                    <Setting />
                </div>
                <TextDisplay />
            </div>
        </div>
    </>
  )
}

export default ProfileSection