'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useMetricsAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.metrics-heading', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.metrics-heading',
          start: 'top 85%',
        },
      });

      gsap.from('.metric-item', {
        opacity: 0,
        y: 50,
        filter: 'blur(8px)',
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.metric-item',
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
