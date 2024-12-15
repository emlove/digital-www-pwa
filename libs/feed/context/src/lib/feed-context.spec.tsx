import { render } from '@testing-library/react';

import FeedContext from './feed-context';

describe('FeedContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedContext />);
    expect(baseElement).toBeTruthy();
  });
});
