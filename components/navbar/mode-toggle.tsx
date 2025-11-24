"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [showReveal, setShowReveal] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const handleToggle = (newMode: "light" | "dark") => {
    setShowReveal(true);

    setTimeout(() => {
      setTheme(newMode);
      setMode(newMode);
    }, 300);

    setTimeout(() => {
      setShowReveal(false);
    }, 900);
  };

  return (
    <>
      <div className="relative border p-2 rounded-full cursor-pointer">
        <Sun
          onClick={() => handleToggle("dark")}
          className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90"
        />
        <Moon
          onClick={() => handleToggle("light")}
          className="absolute top-1/5 left-1/4 h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
      </div>

      {createPortal(
        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ clipPath: "circle(0% at 100% 0)" }}
              animate={{ clipPath: "circle(160% at 0 0)" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className={`fixed inset-0 pointer-events-none z-100 opacity-10 ${
                mode === "light" ? "bg-black" : "bg-white"
              }`}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ModeToggle;