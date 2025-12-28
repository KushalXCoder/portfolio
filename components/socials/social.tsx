import Socials from './socials'
import { Button } from '../ui/button'
import { File } from 'lucide-react'

const Social = () => {
  return (
    <>
        <Socials />
        <Button variant="ghost" className="inner-shadow border px-5 mt-3 cursor-pointer dark:bg-accent">
          <File />
          <a href="/resume.pdf" target='_blank' download>Resume/CV</a>
        </Button>
    </>
  )
}

export default Social