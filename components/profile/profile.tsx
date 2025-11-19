import React from 'react'
import Active from '../active'
import ChangingName from '../changing-name'
import { BadgeCheck } from 'lucide-react'
import Speaker from '../speaker'
import Setting from '../about-me/settings'
import TextDisplay from '../text-display'
import Profile from '../navbar/profile'

const ProfileSection = () => {
  const gradient = "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1)_0,rgba(0,0,0,0.04)_2px,transparent_2px,transparent_6px)]";

  return (
    <div className="flex w-full h-38 items-end">
        <div className="relative border min-w-38">
            <Profile height={150} width={150} className={`rounded-full border p-0.5 leading-none ${gradient}`} />
            <Active />
        </div>
        <div className="flex flex-col justify-end h-full w-full">
            <div className={`w-full h-full ${gradient}`}></div>
            <div className="flex w-full h-35 justify-between items-center px-4 border border-b-0 border-l-0">
                <div className="flex w-full items-center gap-2 overflow-y-hidden">
                    <ChangingName />
                    <BadgeCheck className="fill-blue-500 h-6 w-6 " />
                    <Speaker name="Kushal Rathod" />
                </div>
                <Setting />
            </div>
            <TextDisplay />
        </div>
    </div>
  )
}

export default ProfileSection