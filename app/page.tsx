import CalEmbed from '@/components/CalEmbed';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Navbar from '@/components/Navbar';
import Technologies from '@/components/Technologies';
import WhatIBuild from '@/components/WhatIBuild';

export default function Home() {
  return (
    <main className='bg-[#fafafa] text-[#171717]'>
      <Navbar />
      <Hero />
      <WhatIBuild />
      <Metrics />
      <Technologies />
      <CalEmbed />
      <Footer />
    </main>
  );
}
