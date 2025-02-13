import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(lenisInstance); // Set Lenis instance

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenisInstance.destroy();
  }, []);

  return lenis;
};

export default useLenis;

