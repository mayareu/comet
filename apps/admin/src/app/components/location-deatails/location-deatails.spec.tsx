import { render } from '@testing-library/react';

import LocationDeatails from './location-deatails';

describe('LocationDeatails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocationDeatails />);
    expect(baseElement).toBeTruthy();
  });
});
