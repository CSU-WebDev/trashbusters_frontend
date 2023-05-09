import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../components/Main';

describe('Main component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders child components', () => {
    render(<Main />);
    const mainContainer = screen.getByTestId('main');
    expect(mainContainer).toBeInTheDocument();

    expect(screen.getByTestId('pitch-container')).toBeInTheDocument();
    expect(screen.getByTestId('about-container')).toBeInTheDocument();
    expect(screen.getByTestId('trashmap-container')).toBeInTheDocument();
    expect(screen.getByTestId('contact-container')).toBeInTheDocument();
  });
});
