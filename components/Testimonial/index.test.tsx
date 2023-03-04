import { render, screen } from '@testing-library/react';
import Testimonial from 'components/Testimonial';

import { testimonial } from 'data/events/testimonial';

describe('Testimonial', () => {
  it('renders the testimonial component', () => {
    render(<Testimonial {...testimonial} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    expect(screen.getByText(testimonial.company)).toBeInTheDocument();
    expect(screen.getByText(testimonial.text)).toBeInTheDocument();
  });
});
