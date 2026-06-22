'use client';

import useTechnologiesAnimation from '@/hooks/useTechnologiesAnimation';

const technologies = [
  'Next.js',
  'TypeScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'GSAP',
  'Docker',
  'AWS',
  'Generative AI',
  'AI Agents',
];

export default function Technologies() {
  useTechnologiesAnimation();

  return (
    <section className='mx-auto max-w-7xl px-8 py-16 md:py-32'>
      <div className='border-t border-zinc-200 pt-12'>
        <div className='technologies-heading mb-16'>
          <span className='text-xs font-medium uppercase tracking-[0.25em] text-zinc-500'>
            Technologies
          </span>

          <h2 className='mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#171717] md:text-5xl'>
            Modern technologies used to build scalable products.
          </h2>
        </div>

        <div className='grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-4'>
          {technologies.map((tech) => (
            <div
              key={tech}
              className='technology-item border-b border-zinc-200 pb-4'
            >
              <h3 className='text-xl font-semibold tracking-[-0.03em] text-[#171717] md:text-2xl'>
                {tech}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
