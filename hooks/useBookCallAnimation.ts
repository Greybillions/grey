'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useBookCallAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.book-call-header', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.book-call-header',
          start: 'top 80%',
        },
      });

      gsap.from('.book-call-calendar', {
        opacity: 0,
        y: 80,
        scale: 0.98,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.book-call-calendar',
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
