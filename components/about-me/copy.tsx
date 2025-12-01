"use client";

import { Copy } from 'lucide-react';
import { useState } from 'react';

type CopyButtonProps = {
    data: string;
};

const CopyButton = (data: CopyButtonProps) => { 
  const [text, setText] = useState<string | null>(null);
  const handleCopy = async () => {
    // Copy to clipboard
    await navigator.clipboard.writeText(data.data);
    // Display on screen
    setText("Copied");
    // Remove the display after 3 seconds
    setTimeout(() => {
        setText(null);
    }, 3000);
  }  
    
  return (
    <>
        {text ? (
            <h1>{text}</h1>
        ) : (
            <Copy onClick={handleCopy} className='h-4 w-4 cursor-pointer' />
        )}
    </>
  )
}

export default CopyButton