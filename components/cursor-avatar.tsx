"use client";

import { useEffect, useRef } from "react";

export default function CursorAvatar() {
  const avatarRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const avatar = avatarRef.current;
    if (!avatar) return;

    let mouseX = 0, mouseY = 0;
    let avatarX = window.innerWidth / 2;
    let avatarY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      avatarX += (mouseX - avatarX) * 0.15;
      avatarY += (mouseY - avatarY) * 0.15;

      avatar.style.left = `${avatarX}px`;
      avatar.style.top = `${avatarY}px`;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <img
      ref={avatarRef}
      src="/avatar.png"
      alt="cursor avatar"
      className="cursor-avatar h-30 w-30"
    />
  );
}