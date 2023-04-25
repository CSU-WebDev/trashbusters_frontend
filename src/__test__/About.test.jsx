import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/About';


describe('About component', () => {
    test('renders About component', () => {
      render(<About />);
      expect(screen.getByText('About')).toBeInTheDocument();
    });
  
    test('renders about paragraph with correct content', () => {
      render(<About />);
      const aboutParagraph = screen.getByTestId('about-paragraph');
      expect(aboutParagraph).toHaveTextContent(
        /Litter is never fun to look at\. Join the fight and help bust some trash!/
      );
    });
  });
  