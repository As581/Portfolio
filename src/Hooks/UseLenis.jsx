import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness duration
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing
      smooth: true,
    });

    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => lenis.destroy();
  }, []);
};

export default useLenis;
