import { Button } from "@/components/ui/button"

const Components = () => {
  return (
    <div className='container mx-auto h-screen max-w-4xl font-poppins px-12'>
        <div className="flex flex-col mt-5">
            <h1 className='text-3xl text-primary font-bold'>Components</h1>
            <p className='text-gray-500'>Here, are some of the components made by me, ranging from elevating design to scalable components.</p>
            <div className="h-full w-full flex justify-center mt-50">
                <Button variant="ghost" className="inner-shadow border">
                    Coming Soon...
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Components