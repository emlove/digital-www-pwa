import { render } from '@testing-library/react';

import TopNavComponent from './top-nav-component';

describe('TopNavComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNavComponent />);
    expect(baseElement).toBeTruthy();
  });
});
