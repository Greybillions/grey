'use client';

import useWhatIBuildAnimation from '@/hooks/useWhatIBuildAnimation';

export default function WhatIBuild() {
  useWhatIBuildAnimation();

  return (
    <section className='mx-auto max-w-7xl px-8 py-16'>
      <div className='what-build-heading mb-6'>
        <span className='text-xs font-medium uppercase tracking-[0.25em] text-zinc-500'>
          What We Build
        </span>

        <h2 className='mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#171717] md:text-5xl'>
          Software that helps businesses move faster, scale smarter, and operate
          more efficiently.
        </h2>
      </div>

      <div className='what-build-grid border-t border-zinc-200 pt-12'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20'>
          <div className='what-build-item'>
            <span className='text-sm text-zinc-400'>01</span>

            <h3 className='mt-4 text-xl font-semibold tracking-[-0.02em] text-[#171717]'>
              Digital Products
            </h3>

            <p className='mt-4 text-base leading-7 text-[#525252]'>
              SaaS platforms, booking systems, dashboards, and modern web
              applications designed for performance and growth.
            </p>
          </div>

          <div className='what-build-item'>
            <span className='text-sm text-zinc-400'>02</span>

            <h3 className='mt-4 text-xl font-semibold tracking-[-0.02em] text-[#171717]'>
              Business Automation
            </h3>

            <p className='mt-4 text-base leading-7 text-[#525252]'>
              Automated workflows, custom integrations, and operational systems
              that save time and eliminate repetitive work.
            </p>
          </div>

          <div className='what-build-item'>
            <span className='text-sm text-zinc-400'>03</span>

            <h3 className='mt-4 text-xl font-semibold tracking-[-0.02em] text-[#171717]'>
              Secure Systems
            </h3>

            <p className='mt-4 text-base leading-7 text-[#525252]'>
              Security-first architecture, authentication systems, audits, and
              production-ready best practices.
            </p>
          </div>

          <div className='what-build-item'>
            <span className='text-sm text-zinc-400'>04</span>

            <h3 className='mt-4 text-xl font-semibold tracking-[-0.02em] text-[#171717]'>
              UI & UX Design
            </h3>

            <p className='mt-4 text-base leading-7 text-[#525252]'>
              Clean, intuitive interfaces focused on usability, accessibility,
              and conversion-driven user experiences.
            </p>
          </div>

          <div className='what-build-item'>
            <span className='text-sm text-zinc-400'>05</span>

            <h3 className='mt-4 text-xl font-semibold tracking-[-0.02em] text-[#171717]'>
              API & Backend Systems
            </h3>

            <p className='mt-4 text-base leading-7 text-[#525252]'>
              Scalable APIs, database architecture, authentication systems, and
              cloud-ready backend infrastructure.
            </p>
          </div>

          <div className='what-build-item'>
            <span className='text-sm text-zinc-400'>06</span>

            <h3 className='mt-4 text-xl font-semibold tracking-[-0.02em] text-[#171717]'>
              AI Solutions
            </h3>

            <p className='mt-4 text-base leading-7 text-[#525252]'>
              AI-powered assistants, workflow automation, intelligent search,
              content generation, and custom agent-based systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
