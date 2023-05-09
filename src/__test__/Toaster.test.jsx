import React from 'react';
import { render, screen, fireEvent, prettyDOM } from '@testing-library/react';
import Toaster from '../components/Toaster';
import '@testing-library/jest-dom';

describe('Toaster component', () => {
  test('matches snapshot when there is no error', () => {
    const { asFragment } = render(<Toaster apiStatus="SUCCESS" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot when there is an error', () => {
    const { asFragment } = render(<Toaster apiStatus="ERROR" apiMessage="Something went wrong" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Toaster component when there is an error', () => {
    render(<Toaster apiStatus="ERROR" apiMessage="Something went wrong" />);
    const toasterElement = screen.getByTestId('toaster');
    expect(toasterElement).toBeInTheDocument();
  });

  test('does not render Toaster component when there is no error', () => {
    render(<Toaster apiStatus="SUCCESS" />);
    const toasterElement = screen.queryByTestId('toaster');
    expect(toasterElement).not.toBeInTheDocument();
  });

  test('renders error message when there is an error', () => {
    render(<Toaster apiStatus="ERROR" apiMessage="Something went wrong" />);
    const toasterBody = screen.getByText(/Something went wrong/i);
    expect(toasterBody).toBeInTheDocument();
  });

  test('renders correct error header', () => {
    render(<Toaster apiStatus="ERROR" apiMessage="Something went wrong" />);
    const toasterHeader = screen.getByText(/Error/i);
    expect(toasterHeader).toBeInTheDocument();
  });

  // test('calls setApiStatus with null and hides the Toast when the close button is clicked', () => {
  //   const setApiStatusMock = jest.fn((value) => {
  //     console.log('setApiStatusMock called with', value);
  //   });      
  //   render(<Toaster apiStatus="ERROR" apiMessage="Something went wrong" setApiStatus={setApiStatusMock} />);

  //   // Find the close button and click it
  //   const closeButton = screen.getByRole('button');
  //   fireEvent.click(closeButton);

  //   // Verify that setApiStatus was called with null
  //   expect(setApiStatusMock).toHaveBeenCalledWith(null);

  //   // Verify that the Toast is not visible anymore
  //   const toasterElement = screen.queryByTestId('toaster');
  //   console.log(prettyDOM(toasterElement));
  //   expect(toasterElement).toBeNull();
  // });
  
});
