import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/About';

describe('About component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders About heading', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders about paragraph with correct content', () => {
    render(<About />);
    const aboutParagraph = screen.getByTestId('about-paragraph');
    expect(aboutParagraph).toHaveTextContent(
      /Litter is never fun to look at. Join the fight and help bust some trash!/
    );
  });
});

  