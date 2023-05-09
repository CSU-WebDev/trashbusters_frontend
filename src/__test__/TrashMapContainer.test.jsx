import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrashMapContainer from '../components/TrashMapContainer';

describe('TrashMapContainer component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<TrashMapContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Trash Map heading', () => {
    render(<TrashMapContainer />);
    expect(screen.getByText('Trash Map')).toBeInTheDocument();
  });

  test('renders TrashMap component', () => {
    render(<TrashMapContainer />);
    const trashMapContainer = screen.getByTestId('trashmap-container');
    expect(trashMapContainer).toBeInTheDocument();
  });
});
