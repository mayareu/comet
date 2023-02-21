import { render } from '@testing-library/react';

import ContextProvider from './context-provider';

describe('ContextProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextProvider />);
    expect(baseElement).toBeTruthy();
  });
});
