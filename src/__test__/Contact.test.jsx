import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';

describe('Contact component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Contact Us header', () => {
    render(<Contact />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  test('renders form with correct action URL', () => {
    render(<Contact />);
    const form = screen.getByTestId('form');
    expect(form).toHaveAttribute('action', 'https://formspree.io/f/xyyaglza');
  });

  test('renders email input', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/Email address/);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(emailInput).toHaveAttribute('required', '');
  });

  test('renders name input', () => {
    render(<Contact />);
    const nameInput = screen.getByTestId('name-input');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('name', 'name');
    expect(nameInput).toHaveAttribute('required', '');
  });

  test('renders message textarea', () => {
    render(<Contact />);
    const messageInput = screen.getByTestId('message-input');
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveAttribute('type', 'textarea');
    expect(messageInput).toHaveAttribute('name', 'message');
    expect(messageInput).toHaveAttribute('required', '');
  });

  test('renders submit button', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /Submit/ });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
