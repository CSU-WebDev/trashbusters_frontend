import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pics from '../components/Pics';
import UglyPicture from '../images/litter-before.jpg';
import PrettyPicture from '../images/litter-after.jpg';

describe('Pics', () => {
  test('renders Pics component with two Pic components', () => {
    render(<Pics />);

    const containerElement = screen.getByTestId('pics-container');
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('container');
    expect(containerElement).toHaveAttribute('id', 'pics-container');

    const rowElement = screen.getByTestId('pics-row');
    expect(rowElement).toBeInTheDocument();

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(2);
    expect(imageElements[0]).toHaveAttribute('src', UglyPicture);
    expect(imageElements[1]).toHaveAttribute('src', PrettyPicture);

    const col1Element = screen.getByTestId('pics-col-1');
    const col2Element = screen.getByTestId('pics-col-2');
    expect(col1Element).toBeInTheDocument();
    expect(col2Element).toBeInTheDocument();
    expect(col1Element).toHaveClass('align-items-center');
    expect(col2Element).toHaveClass('align-items-center');
  });
});

