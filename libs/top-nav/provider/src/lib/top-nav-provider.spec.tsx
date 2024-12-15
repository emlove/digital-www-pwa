import { render } from '@testing-library/react';

import TopNavProvider from './top-nav-provider';

describe('TopNavProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNavProvider />);
    expect(baseElement).toBeTruthy();
  });
});
