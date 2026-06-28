'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import useBookCallAnimation from '@/hooks/useBookCallAnimation';

export default function BookCall() {
  useBookCallAnimation();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: '30min',
      });

      cal('ui', {
        layout: 'month_view',
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <section
      id='contact'
      className='book-call-section bg-[#171717] py-24 md:py-32'
    >
      <div className='mx-auto max-w-7xl px-8'>
        <div className='book-call-header mb-16'>
          <span className='text-xs font-medium uppercase tracking-[0.25em] text-zinc-400'>
            Book a Call
          </span>

          <h2 className='mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#fafafa] md:text-6xl'>
            Let&apos;s discuss your next project.
          </h2>

          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400'>
            Whether you&apos;re building a SaaS platform, automating operations,
            integrating AI, or improving security, let&apos;s talk about how we
            can make it happen.
          </p>
        </div>

        <div className='mb-8 flex items-center gap-4'>
          <a
            href='mailto:grahamboyle22@gmail.com'
            className='inline-flex items-center text-base font-medium text-[#fafafa] transition hover:text-zinc-300'
          >
            Send an email to greylabs.global@gmail.com →
          </a>
        </div>

        <div className='my-8 flex items-center gap-4'>
          <a
            href='https://linkedin.com/in/grahamboyle'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-700 hover:text-white'
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href='mailto:greylabs.global@gmail.com'
            className='rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-700 hover:text-white'
          >
            <Mail size={18} />
          </a>

          <a
            href='https://github.com/greybillions'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-700 hover:text-white'
          >
            <FiGithub size={18} />
          </a>

          <a
            href='https://x.com/greybilli0ns'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all hover:border-zinc-700 hover:text-white'
          >
            <FiTwitter size={18} />
          </a>
        </div>

        <div className='book-call-calendar overflow-auto rounded-3xl border border-zinc-800'>
          <Cal
            namespace='30min'
            calLink='grey1511/30min'
            style={{
              width: '100%',
              height: '850px',
            }}
            config={{
              layout: 'month_view',
            }}
          />
        </div>
      </div>
    </section>
  );
}
