import Head from 'next/head';
import Hero from '@/components/Hero';
import PageSection from '@/components/PageSection';
import TrendingCategories from '@/features/TrendingCategories';
import UpcomingEvents from '@/features/UpcomingEvents';
import Testimonial from '@/components/Testimonial';

// moved to UI folder to clean up the page
import {
  TrendingCategoriesCircles,
  UpcomingEventsCircles,
  TestimonialCircles,
} from '@/components/UI/EventsCircles';

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
import { testimonial } from '@/data/events/testimonial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Events</title>
        <meta name="description" content="Lorem ipsum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...hero} />
      <PageSection>
        <TrendingCategoriesCircles />
        <TrendingCategories content={trendingContent} categories={categories} />
      </PageSection>
      <PageSection bgColor="bg.primary">
        <UpcomingEventsCircles />
        <UpcomingEvents content={upcomingContent} events={events} />
      </PageSection>
      <PageSection bgColor="bg.secondary">
        <TestimonialCircles />
        <Testimonial {...testimonial} />
      </PageSection>
    </>
  );
}
