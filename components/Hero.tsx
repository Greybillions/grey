'use client';

import Image from 'next/image';
import Link from 'next/link';
import useHeroAnimation from '@/hooks/useHeroAnimation';
import { ArrowUpRight, Shield, Zap, Boxes } from 'lucide-react';

export default function Hero() {
  useHeroAnimation();

  return (
    <section className='relative mx-auto md:min-h-screen max-w-6xl px-8 md:pt-10 pt-32 overflow-hidden'>
      <div className='grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
        {/* LEFT SIDE */}
        <div className='relative z-10'>
          <div className='hero-badge mb-10 inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-5 py-2 text-[0.625rem] md:text-sm tracking-wide text-zinc-500 backdrop-blur-sm '>
            • AVAILABLE FOR FREELANCE & REMOTE WORK
          </div>

          <h1 className='hero-heading max-w-4xl text-[3rem] font-semibold md:leading-none leading-[1.1] tracking-[-0.08em] text-[#171717] md:text-[3.5rem] lg:text-[4rem]'>
            Building digital
            <br />
            products that
            <br />
            actually scale.
          </h1>

          <p className='hero-text mt-8 max-w-xl text-base md:text-xl leading-relaxed text-[#292929]'>
            Full-stack engineer focused on modern web applications, automation,
            cybersecurity, and business systems.
          </p>

          <div className='hero-actions mt-10 flex flex-wrap gap-4'>
            <Link
              href='https://github.com/greybillions'
              target='_blank'
              className='flex items-center gap-2 rounded-full bg-[#171717] md:px-8 md:py-4 px-6 py-3 text-sm text-white transition-all hover:bg-[#0F0F0F]'
            >
              View Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href='#contact'
              className='rounded-full border border-zinc-200 bg-white/70 md:px-8 md:py-4 px-6 py-3 text-sm text-[#171717] backdrop-blur-sm transition-all hover:bg-white'
            >
              Contact Me
            </Link>
          </div>

          <div className='mt-12 flex flex-wrap items-center gap-8 text-sm text-zinc-500'>
            <div className='flex items-center gap-2'>
              <Shield size={16} />
              Security First
            </div>

            <div className='flex items-center gap-2'>
              <Boxes size={16} />
              Scalable Systems
            </div>

            <div className='flex items-center gap-2'>
              <Zap size={16} />
              Automation
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='hero-image md:flex hidden relative h-212.5 lg:-mr-32'>
          <Image
            src='/hero.webp'
            alt='Automation'
            width={1000}
            height={1000}
            priority
            className='object-cover grayscale saturate-0'
          />

          {/* Fade image into page */}

          {/* Soft glow */}
          <div className='absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#faf7f7]' />
        </div>
      </div>

      {/* Background Blur */}
      <div className='absolute -left-50 top-75 h-125 w-125 rounded-full bg-white blur-[150px]' />
    </section>
  );
}
