'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useTechnologiesAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.technologies-heading', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.technologies-heading',
          start: 'top 85%',
        },
      });

      gsap.from('.technology-item', {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)',
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.technology-item',
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
