import Socials from './socials'
import { File } from 'lucide-react'
import { ConfettiButton } from '../ui/confetti'

const Social = () => {
  return (
    <div className='mt-4'>
        <Socials />
        <ConfettiButton className="inner-shadow border px-5 mt-1.5 cursor-pointer dark:bg-accent">
          <File />
          <a href="/resume.pdf" target='_blank' download>Resume/CV</a>
        </ConfettiButton>
    </div>
  )
}

export default Social