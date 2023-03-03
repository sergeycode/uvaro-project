import { Heading, Grid, GridItem } from '@chakra-ui/react';

import { IEventCard, EventCard } from '@/components/Cards/EventCard';

export interface IUpcomingEventsContent {
  title: string;
}

export default function UpcomingEvents({
  content,
  events,
}: {
  content: IUpcomingEventsContent;
  events: IEventCard[];
}) {
  return (
    <>
      <Heading
        as="h2"
        textTransform="uppercase"
        fontSize={{ base: '2xl', lg: '4xl' }}
        textAlign={{ base: 'center', xl: 'left' }}
      >
        {content.title}
      </Heading>
      <Grid
        mt={{ base: 6, lg: 4 }}
        templateColumns={{ lg: 'repeat(3, 1fr)', '2xl': 'repeat(4, 1fr)' }}
        gap={{ base: 10, xl: '64px 40px' }}
      >
        {events.map((event) => (
          <GridItem key={event.id}>
            <EventCard {...event} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
