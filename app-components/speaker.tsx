"use client";

import { Volume2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";

const Speaker = ({ name } : { name: string }) => {
  const [isSupported] = useState<boolean>(() => {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  })
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {

            const setPreferredVoice = () => {
                const voices = window.speechSynthesis.getVoices();
                // Try to find a specific, high-quality voice
                const preferredVoice = voices.find(
                    (v) => v.lang === 'en-IN' && v.name.includes('Google')
                ) || voices.find((v) => v.lang.startsWith('en')); // Fallback to any English voice

                if (preferredVoice) {
                    setVoice(preferredVoice);
                }
            };

            window.speechSynthesis.addEventListener('voiceschanged', setPreferredVoice);
            setPreferredVoice();

            return () => {
                window.speechSynthesis.removeEventListener('voiceschanged', setPreferredVoice);
            };
        }
    }, []);

    const speakText = useCallback(() => {
        if (!isSupported) {
            console.error('Web Speech API is not supported.');
            return;
        }

        // 1. Cancel any currently speaking utterance
        window.speechSynthesis.cancel(); 

        // 2. Create the utterance
        const utterance = new SpeechSynthesisUtterance(`${name}`);

        // 3. Apply the preferred voice if available
        if (voice) {
            utterance.voice = voice;
        }

        // 4. Set other optional properties
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.lang = 'en-UK';

        // 5. Speak the text
        window.speechSynthesis.speak(utterance);
    }, [isSupported, voice, name]);

    if (!isSupported) {
        return null;
    }
  
  return (
    <motion.div onClick={speakText} initial={{ scale: 1 }} whileTap={{ scale: 0.85, transition: { ease: "easeInOut" } }}>
        <Volume2 className="size-5 md:size-6" />
    </motion.div>
  )
}

export default Speaker