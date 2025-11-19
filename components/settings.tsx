import { Settings } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input';

const questions = [
    { name: "Full Name", value: "Kushal Rathod" },
    { name: "Contact", value: "kushalwork2422@gmail.com" },
    { name: "Location", value: "Ahmedabad, Gujarat, India" },
    { name: "College", value: "Ahmedabad University" },
]

const Setting = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <Settings className='hover:rotate-90 transition-all cursor-pointer' />
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
                                <h1 className='text-primary'>{question.name}</h1>
                                <Input value={question.value} disabled className='text-primary border-dashed border-primary' />
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