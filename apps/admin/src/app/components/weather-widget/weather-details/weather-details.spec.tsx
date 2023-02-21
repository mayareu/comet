import { render } from '@testing-library/react';

import WeatherDetails from './weather-details';

describe('WeatherDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherDetails />);
    expect(baseElement).toBeTruthy();
  });
});
