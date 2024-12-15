import { render } from '@testing-library/react';

import TopNavContext from './top-nav-context';

describe('TopNavContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNavContext />);
    expect(baseElement).toBeTruthy();
  });
});
