import { render, screen } from '@testing-library/react';
import Hero from 'components/Hero';

import { hero } from 'data/events/hero';

describe('Hero', () => {
  it('renders the hero component', () => {
    render(<Hero {...hero} />);

    expect(screen.getByText(hero.title)).toBeInTheDocument();
    expect(screen.getByText(hero.text)).toBeInTheDocument();
  });
});
