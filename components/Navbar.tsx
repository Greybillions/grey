'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const cta = ctaRef.current;
    if (!nav || !cta) return;

    gsap.set(nav, { width: 140 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.to(nav, { width: '92%', duration: 0.7 }).to(
      cta,
      { opacity: 1, duration: 0.3 },
      '-=0.1',
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className='fixed top-6 left-1/2 z-50 max-w-3xl -translate-x-1/2 overflow-hidden'
    >
      <div className='flex items-center justify-between rounded-full border border-zinc-200 bg-white/80 md:px-6 md:py-4 px-4 py-2 backdrop-blur-xl'>
        <Link
          href='/'
          className='md:text-4xl text-2xl font-bold tracking-[-0.12em] text-[#171717] whitespace-nowrap'
        >
          Grey
        </Link>

        <Link
          ref={ctaRef}
          style={{ opacity: 0 }}
          className='rounded-full bg-[#171717] px-5 py-3 text-sm text-white transition hover:bg-[#0F0F0F] whitespace-nowrap'
          href='#contact'
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
