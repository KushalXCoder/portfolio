import Socials from './socials'
import { Button } from '../ui/button'

const Social = () => {
  return (
    <>
        <Socials />
        <div className="flex items-center mb-8">
            <Button variant="ghost" className="h-10 inner-shadow border px-5 mt-5 cursor-pointer">Resume/CV</Button>
        </div>
    </>
  )
}

export default Social