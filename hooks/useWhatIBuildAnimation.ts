'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useWhatIBuildAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.what-build-heading', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.what-build-heading',
          start: 'top 85%',
        },
      });

      gsap.from('.what-build-item', {
        opacity: 0,
        y: 60,
        filter: 'blur(8px)',
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.what-build-grid',
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
