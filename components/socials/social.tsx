import Socials from './socials'
import { Button } from '../ui/button'
import { File } from 'lucide-react'

const Social = () => {
  return (
    <>
        <Socials />
        <div className="flex items-center mb-8">
            <Button variant="ghost" className="h-10 inner-shadow border px-5 mt-5 cursor-pointer dark:bg-accent">
              <File />
              <a href="/resume.pdf" target='_blank' download>Resume/CV</a>
            </Button>
        </div>
    </>
  )
}

export default Social