import Head from 'next/head';
import Hero from '@/components/Hero';
import PageSection from '@/components/PageSection';
import TrendingCategories from '@/features/TrendingCategories';
import {
  YellowCircle,
  GreenCircleOutline,
  GreenCircle,
  WhiteCircleOutline,
} from '@/components/UIElements/Circles';
import UpcomingEvents from '@/features/UpcomingEvents';

// data
import { hero } from '@/data/events/hero';
import {
  content as trendingContent,
  categories,
} from '@/data/events/trendingCategories';
import {
  content as upcomingContent,
  events,
} from '@/data/events/upcomingEvents';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Events</title>
        <meta name="description" content="Lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title={hero.title} text={hero.text} image={hero.image} />
      <PageSection>
        <YellowCircle />
        <GreenCircleOutline bottom="-150px" />
        <TrendingCategories content={trendingContent} categories={categories} />
      </PageSection>
      <PageSection bgColor="bg.primary">
        <GreenCircleOutline top="-150px" />
        <GreenCircle />
        <WhiteCircleOutline />
        <UpcomingEvents content={upcomingContent} events={events} />
      </PageSection>
    </>
  );
}
