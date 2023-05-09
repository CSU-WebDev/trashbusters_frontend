import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders Navbar component with the brand name and nav links', () => {
    render(<Navbar />);

    expect(screen.getByText('Trashbusters')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Trash-Map')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('has correct href values for nav links', () => {
    render(<Navbar />);

    expect(screen.getByText('About')).toHaveAttribute('href', '#about-container');
    expect(screen.getByText('Trash-Map')).toHaveAttribute('href', '#trashmap-container');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact-container');
  });

});
