import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pitch from '../components/Pitch';

jest.mock('../components/Pics', () => {
  return function DummyPics() {
    return <div data-testid="dummy-pics"></div>;
  };
});

describe('Pitch', () => {
  test('renders Pitch component with a header and Pics component', () => {
    render(<Pitch />);

    const pitchContainer = screen.getByTestId('pitch-container');
    expect(pitchContainer).toBeInTheDocument();
    expect(pitchContainer).toHaveClass('box');

    const header = screen.getByText('Which do you prefer???');
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('H3');
    expect(header).toHaveClass('text-center');

    const picsElement = screen.getByTestId('dummy-pics');
    expect(picsElement).toBeInTheDocument();
  });
});
