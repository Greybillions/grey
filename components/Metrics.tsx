'use client';

import useMetricsAnimation from '@/hooks/useMetricsAnimation';

export default function Metrics() {
  useMetricsAnimation();

  const metrics = [
    {
      value: '25+',
      label: 'Projects Delivered',
    },
    {
      value: '4+',
      label: 'Years Building',
    },
    {
      value: '24/7',
      label: 'Automation',
    },
    {
      value: '100%',
      label: 'Custom Solutions',
    },
  ];

  return (
    <section className='mx-auto max-w-7xl px-8 py-16'>
      <div className='border-t border-zinc-200 pt-12'>
        <div className='metrics-heading mb-16'>
          <span className='text-xs font-medium uppercase tracking-[0.25em] text-zinc-500'>
            By The Numbers
          </span>
        </div>

        <div className='grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4 text-center'>
          {metrics.map((metric, index) => (
            <div key={index} className='metric-item'>
              <h3 className='text-4xl font-semibold tracking-[-0.06em] text-[#171717] sm:text-5xl md:text-6xl'>
                {metric.value}
              </h3>

              <p className='mt-3 text-sm text-zinc-500'>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
