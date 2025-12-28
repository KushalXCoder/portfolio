"use client";

import { Settings } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input';
import CopyButton from './copy';
import { useUserStore } from '@/store/user.store';

const questions = [
    { name: "Full Name", value: "Kushal Rathod" },
    { name: "Contact", value: "kushalwork2422@gmail.com" },
    { name: "Location", value: "Ahmedabad, Gujarat, India" },
    { name: "College", value: "Ahmedabad University" },
];

const Setting = () => {
  const { openSettings, setOpenSettings } = useUserStore();
  return (
    <Dialog open={openSettings} onOpenChange={setOpenSettings}>
        <DialogTrigger>
            <Settings onClick={() => setOpenSettings(true)} className='size-5 md:size-6 hover:rotate-90 transition-all cursor-pointer' />
        </DialogTrigger>
        <DialogContent className='font-poppins'>
            <DialogHeader>
                <DialogTitle>
                    Settings
                </DialogTitle>
                <DialogDescription className='mt-3'>
                    <div className='flex flex-col gap-3'>
                        {questions.map((question,index) => (
                            <div key={index} className='flex flex-col gap-1'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-primary'>{question.name}</h1>
                                    {question.name === 'Contact' && (
                                        <CopyButton data={question.value} />
                                    )}
                                </div>
                                <Input value={question.value} className='text-primary border-dashed border-primary' />
                            </div>
                        ))}
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default Setting