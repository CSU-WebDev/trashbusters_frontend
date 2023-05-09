import React from 'react';
import { render, screen, fireEvent, waitFor, prettyDOM, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrashMap from '../components/TrashMap';
import { GoogleMap } from '@react-google-maps/api';

jest.setTimeout(30000);

test('renders TrashMap component without crashing', () => {
  render(<TrashMap />);
});

describe('TrashMap', () => {
  
  test('adds a marker when the map is clicked', async () => {
    let container;
    act(() => {
      container = render(<TrashMap />).container;
    });
  
    console.log(prettyDOM(container));
  
    await new Promise(resolve => setTimeout(resolve, 20000));
  
    console.log(prettyDOM(container));
    // Wait for the map to load with a custom wait time of 5 seconds (5000 milliseconds)
    // await waitFor(() => screen.findByTestId('google-map'), { timeout: 10000 });

    // const map = screen.getByTestId('google-map');
    // const mapClickEvent = {
    //   latLng: {
    //     lat: () => 32.502447,
    //     lng: () => -84.940258,
    //   },
    // };

    // fireEvent.click(map, mapClickEvent);

    // // Wait for the marker with the ID 'selected-marker' to be present in the document with a custom wait time of 5 seconds (5000 milliseconds)
    // await waitFor(() => screen.findByTestId('selected-marker'), { timeout: 10000 });
    // expect(screen.getByTestId('selected-marker')).toBeInTheDocument();
  });
});

// // Mock necessary dependencies
// jest.mock('@react-google-maps/api', () => {
//   return {
//     GoogleMap: jest.fn(() => <div data-testid="mock-google-map"></div>),
//     LoadScript: jest.fn(({ children }) => children),
//     MarkerF: jest.fn(() => <div data-testid="mock-marker"></div>),
//     InfoWindowF: jest.fn(() => <div data-testid="mock-info-window"></div>),
//   };
// });


// jest.mock('axios-es6', () => ({
//   get: jest.fn(() => Promise.resolve({ data: [] })),
//   post: jest.fn(() => Promise.resolve({ data: {} })),
//   delete: jest.fn(() => Promise.resolve({})),
// }));

// describe('TrashMap', () => {
//   test('renders TrashMap component', () => {
//     render(<TrashMap />);

//     // Check if GoogleMap is rendered
//     const googleMapElement = screen.getByTestId('mock-google-map');
//     expect(googleMapElement).toBeInTheDocument();

//     // Check if MarkerF is rendered
//     const markerElement = screen.getByTestId('mock-marker');
//     expect(markerElement).toBeInTheDocument();

//     // Check if InfoWindowF is rendered
//     const infoWindowElement = screen.getByTestId('mock-info-window');
//     expect(infoWindowElement).toBeInTheDocument();
//   });
// });
