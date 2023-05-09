import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pic from '../components/Pic';
import testImage from '../images/litter-after.jpg';

describe('Pic', () => {
  test('renders Pic component with the provided image src', () => {
    render(<Pic src={testImage} />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveClass('pic');
    expect(imageElement).toHaveAttribute('src', testImage);
  });
});
