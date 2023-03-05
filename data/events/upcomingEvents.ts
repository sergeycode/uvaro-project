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
    id: 'JWEB20230315',
    title: 'Navigating the Job Market in the Post-COVID Era',
    image: eventImage01.src,
    description:
      "Join us as we discuss the current state of the job market and explore strategies for job seekers to stand out in the new normal. Our speaker, Emily Lee, has helped hundreds of job seekers land their dream jobs and will share insights on how to make yourself stand out in a crowded job market. Whether you're looking to change careers or simply stay competitive, this webinar is a must-attend.",
    speakerName: 'Emily Lee, Career Coach',
    dateTime: 'March 15th, 2023 at 2:00 PM EST',
  },
  {
    id: 'JWEB20230322',
    title: 'Climbing the Corporate Ladder',
    image: eventImage02.src,
    description:
      "If you've ever wondered how successful professionals climb the corporate ladder, this is the event for you. Our speakers, John Smith and Sarah Kim, both started their careers as interns and are now high-level executives in their respective fields. They'll share their tips and strategies for getting noticed and making the most of your opportunities. Whether you're just starting out in your career or looking to take it to the next level, you won't want to miss this webinar.",
    speakerName: 'John Smith, CEO',
    dateTime: 'March 22nd, 2023 at 11:00 AM PST',
  },
  {
    id: 'JWEB20230405',
    title: 'Preparing for a Career in the Gig Economy',
    image: eventImage03.src,
    description:
      "The gig economy is growing fast, and it's not just for Uber drivers and TaskRabbit workers. From freelance writing to graphic design to consulting, there are endless opportunities to work for yourself and build your own brand. But how do you get started? And how do you stay competitive in a crowded market? Our speaker, Rachel Chen, has successfully navigated the gig economy and will share her insights on how to position yourself for success. This webinar is a must-attend for anyone interested in building a career on their own terms.",
    speakerName: 'Rachel Chen, Freelance Writer',
    dateTime: 'April 5th, 2023 at 1:00 PM EST',
  },
  {
    id: 'JWEB20230412',
    title: 'Landing Your Dream Job: Insider Tips and Tricks',
    image: eventImage04.src,
    description:
      "Landing your dream job takes more than just a killer resume and cover letter. In this webinar, our speaker, Tom Lee, will share his insider tips and tricks for standing out in a crowded job market. From networking to acing the interview to negotiating your salary, Tom has seen it all and will share his insights on what it takes to land the job you've always wanted. Don't miss this opportunity to learn from a seasoned talent acquisition manager.",
    speakerName: 'Tom Lee, Talent Manager',
    dateTime: 'April 12th, 2023 at 3:00 PM PST',
  },
  {
    id: 'JWEB20230501',
    title: 'Breaking into the Tech Industry: A Panel Discussion',
    image: eventImage05.src,
    description:
      "Interested in a career in tech? Our panel of experts will share their experiences and offer advice for aspiring tech professionals. From software engineering to UX design to product management, our speakers have worked for some of the biggest names in tech and will share their insights on what it takes to succeed. Whether you're just starting out in your career or looking to make a change, this is a must-attend event.",
    speakerName: 'Michelle Wu, Software Engineer',
    dateTime: 'May 1st, 2023 at 10:00 AM EST',
  },
  {
    id: 'JWEB20230515',
    title: 'Building a Successful Career in Non-Profit',
    image: eventImage06.src,
    description:
      'Join us as we explore the unique challenges and rewards of working in the non-profit sector. Learn from experienced professionals who have made a difference in their communities.',
    speakerName: 'Maria Rodriguez, Director',
    dateTime: 'May 15th, 2023 at 2:00 PM PST',
  },
];
