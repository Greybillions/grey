'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function useHeroAnimation() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from('.hero-badge', {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })
      .from('.hero-heading', {
        opacity: 0,
        y: 80,
        duration: 0.9,
      })
      .from('.hero-text', {
        opacity: 0,
        y: 30,
        duration: 0.5,
      })
      .from('.hero-actions', {
        opacity: 0,
        y: 20,
        duration: 0.5,
      })
      .from('.hero-image', {
        opacity: 0,
        scale: 0.95,
        duration: 1,
      });
  }, []);
}
