import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryCard } from './CategoryCard';
import { EventCard } from './EventCard';

import { categories } from 'data/events/trendingCategories';
import { events } from 'data/events/upcomingEvents';

describe('Cards', () => {
  it('renders the CategoryCard component', () => {
    render(<CategoryCard {...categories[0]} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(categories[0].title)).toBeInTheDocument();
    expect(screen.getByText(categories[0].text)).toBeInTheDocument();
  });

  it('renders the EventCard component, clicks enroll and see modal', () => {
    render(<EventCard {...events[0]} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(events[0].title)).toBeInTheDocument();
    expect(screen.getByText(events[0].description)).toBeInTheDocument();
    expect(screen.getByText(events[0].speakerName)).toBeInTheDocument();
    expect(screen.getByText(events[0].dateTime)).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /learn more/i,
      })
    ).toHaveAttribute('href', `https://example.org?eventid=${events[0].id}`);
    expect(
      screen.getByRole('button', {
        name: /enroll/i,
      })
    ).toBeInTheDocument();

    const enrollButton = screen.getByRole('button', {
      name: /enroll/i,
    });
    fireEvent.click(enrollButton);

    expect(screen.getByText(/Thanks for enrolling!/i)).toBeInTheDocument();
  });
});
