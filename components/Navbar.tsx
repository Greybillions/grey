import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-6 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2'>
      <div className='flex items-center justify-between rounded-full border border-zinc-200 bg-white/80 md:px-6 md:py-4 px-4 py-2 backdrop-blur-xl'>
        <Link
          href='/'
          className='
            md:text-4xl
            text-2xl
            font-bold
            tracking[-0.12em]
            text-[#171717]
            '
        >
          Grey
        </Link>

        <Link
          className='rounded-full bg-[#171717] px-5 py-3 text-sm text-white transition hover:bg-[#0F0F0F]'
          href='#contact'
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
