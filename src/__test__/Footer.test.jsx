import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Footer with correct date', () => {
    render(<Footer />);
    const footerContent = screen.getByTestId('footer');
    const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    expect(footerContent).toHaveTextContent(
        currentDate
    );
  });

});

  