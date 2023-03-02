import Head from 'next/head';
import Hero from '@/components/Hero';
import { hero } from '@/data/hero';

import heroBg from '@/public/images/events/landing-events.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Events</title>
        <meta name="description" content="Lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={hero.title} text={hero.text} image={heroBg.src} />
    </>
  );
}
