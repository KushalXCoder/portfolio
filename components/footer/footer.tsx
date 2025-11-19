import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center text-gray-500 mt-20">
        <p>Developed by <span className="text-primary">Kushal Rathod</span></p>
        <p>Design Inspirations - 
            <span>
                <Link href="https://chanhdai.com/" className="hover:text-primary">
                    {" "}Chanh Dai
                </Link>
            </span>
            {" "}&{" "}
            <span>
                <Link href="https://ramx.in/" className="hover:text-primary">
                    Ramxcodes
                </Link>
            </span>
        </p>
        <p>© 2025. All rights reserved.</p>
    </div>
  )
}

export default Footer