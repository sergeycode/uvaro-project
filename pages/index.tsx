import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Hero from '@/components/Hero';
import PageSection from '@/components/PageSection';
import TrendingCategories from '@/features/TrendingCategories';

// data
import { hero } from '@/data/events/hero';
import { content, categories } from '@/data/events/trendingCategories';

import yellowCircle from '@/public/images/icons/yellow-circle.png';
import greenCircle from '@/public/images/icons/green-circle-outline.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Events</title>
        <meta name="description" content="Lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={hero.title} text={hero.text} image={hero.image} />
      <PageSection>
        <Box
          position="absolute"
          bottom={{ base: '20%', lg: '20%' }}
          left={{
            base: 'calc(50% - 50px)',
            lg: 'calc(50% + 350px)',
            xl: 'calc(50% + 450px)',
          }}
          w={500}
          h={500}
          bgImage={yellowCircle.src}
          bgSize="contain"
          zIndex={-1}
        />
        <TrendingCategories content={content} categories={categories} />
      </PageSection>
    </>
  );
}
