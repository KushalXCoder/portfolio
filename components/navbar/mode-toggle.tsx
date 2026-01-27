"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [showReveal, setShowReveal] = useState(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const handleToggle = (newMode: "light" | "dark") => {
    setShowReveal(true);

    setTimeout(() => {
      setTheme(newMode);
    }, 300);

    setTimeout(() => {
      setShowReveal(false);
    }, 900);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      <div className="relative bg-secondary border p-2 rounded-full cursor-pointer">
        <Sun
          onClick={() => handleToggle("dark")}
          className="size-4 md:size-5 block dark:hidden transition-all"
        />
        <Moon
          onClick={() => handleToggle("light")}
          className="size-4 md:size-5 hidden transition-all dark:block"
        />
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {showReveal && (
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(10px)", transition: { ease: "circIn" } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`fixed inset-0 z-50 pointer-events-none ${
                  theme === "light" ? "bg-black/20" : "bg-white/20"
                }`}
              />
            )}
          </AnimatePresence>,
          document.body
        )
      }
    </>
  );
};

export default ModeToggle;