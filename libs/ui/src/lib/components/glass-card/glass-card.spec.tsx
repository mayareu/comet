import { render } from '@testing-library/react';

import GlassCard from './glass-card';

describe('GlassCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlassCard />);
    expect(baseElement).toBeTruthy();
  });
});
