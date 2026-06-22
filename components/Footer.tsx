export default function Footer() {
  return (
    <footer className='border-t border-zinc-700 bg-[#171717] text-white]'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-8 py-12 md:flex-row md:items-center md:justify-between'>
        <div>
          <h3 className='text-2xl font-bold tracking-[-0.08em] text-white'>
            Grey
          </h3>

          <p className='mt-2 text-sm text-zinc-500'>
            Building software that scales.
          </p>
        </div>

        <div className='flex items-center gap-6 text-sm text-zinc-500'>
          <a href='https://linkedin.com/in/grahamboyle'>LinkedIn</a>

          <a href='mailto:grahamboyle22@gmail.com'>Email</a>

          <a href='https://github.com/Greybillions'>GitHub</a>
        </div>
      </div>
    </footer>
  );
}
