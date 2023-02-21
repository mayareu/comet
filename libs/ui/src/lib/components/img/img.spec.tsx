import { render } from '@testing-library/react';

import Img from './img';

describe('Img', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Img />);
    expect(baseElement).toBeTruthy();
  });
});
