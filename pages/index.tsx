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
      {/* Hero section */}
      <Hero title={hero.title} text={hero.text} image={hero.image} />
      {/* Page Section */}
      <PageSection>
        {/* yellow circle */}
        <YellowCircle />
        {/* green outline circle bottom */}
        <GreenCircleOutline bottom="-150px" />
        {/* Trending Categories section */}
        <TrendingCategories content={trendingContent} categories={categories} />
      </PageSection>
      {/* Page Section */}
      <PageSection bgColor="bg.primary">
        {/* Upcoming Events section */}
        {/* green outline circle top */}
        <GreenCircleOutline top="-150px" />
        {/* green bottom right circle */}
        <GreenCircle />
        {/* whtie bottom right circle */}
        <WhiteCircleOutline />
        <UpcomingEvents content={upcomingContent} events={events} />
      </PageSection>
    </>
  );
}
