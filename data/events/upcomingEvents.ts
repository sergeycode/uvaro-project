import { IUpcomingEventsContent } from '@/features/UpcomingEvents';
import { IEventCard } from '@/components/Cards/EventCard';
import eventImage01 from '@/public/images/events/event-01.jpg';
import eventImage02 from '@/public/images/events/event-02.jpg';
import eventImage03 from '@/public/images/events/event-03.jpg';
import eventImage04 from '@/public/images/events/event-04.jpg';
import eventImage05 from '@/public/images/events/event-05.jpg';
import eventImage06 from '@/public/images/events/event-06.jpg';

export const content: IUpcomingEventsContent = {
  title: 'Upcoming Events',
};

export const events: IEventCard[] = [
  {
    id: 'event-01',
    title: 'Lorem ipsum dolor sit',
    image: eventImage01.src,
    description:
      'Keep driving your mid-funnel nurture and timing skills to focus on the right deals at the right time and consistently close.',
    speakerName: 'John Doe',
    dateTime: 'Mar 00, 2021 at 4-5pm EST',
  },
  {
    id: 'event-02',
    title: 'Lorem ipsum dolor sit',
    image: eventImage02.src,
    description:
      'Gather an overview of the systems used to increase accuracy, spot mistakes, and understand where forecasting fits into a seller’s toolkit.',
    speakerName: 'Joe Moe',
    dateTime: 'Mar 00, 2021 at 4-5pm EST',
  },
  {
    id: 'event-03',
    title: 'Lorem ipsum dolor sit',
    image: eventImage03.src,
    description:
      'Learn proactive strategies and reactionary tactics for career growth. Gather the tools to deal with existing friction in your workplace with the long text here',
    speakerName: 'Jane Finn',
    dateTime: 'Mar 00, 2021 at 4-5pm EST',
  },
  {
    id: 'event-04',
    title: 'Lorem ipsum dolor sit',
    image: eventImage04.src,
    description:
      'Engage in deep discussions and use role play to spot common performance blocks, and apply coaching tactics in live scenarios to drive up close rates long text here',
    speakerName: 'Josh Lee',
    dateTime: 'Mar 00, 2021 at 4-5pm EST',
  },
  {
    id: 'event-05',
    title: 'Lorem ipsum dolor sit',
    image: eventImage05.src,
    description:
      'Increase alignment between you and your buyer by gaining visibility, and increasing your deal predictability to never get blindsided by a new set of long text here',
    speakerName: 'John Terry',
    dateTime: 'Mar 00, 2021 at 4-5pm EST',
  },
  {
    id: 'event-06',
    title: 'Lorem ipsum dolor sit',
    image: eventImage06.src,
    description:
      'Learn the core strategies of personal branding, job search, interview prep, resumes and LinkedIn and then apply them practically through hands-on long text here',
    speakerName: 'John Johnson',
    dateTime: 'Mar 00, 2021 at 4-5pm EST',
  },
];
