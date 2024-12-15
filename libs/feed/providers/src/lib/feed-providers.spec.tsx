import { render } from '@testing-library/react';

import FeedProviders from './feed-providers';

describe('FeedProviders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedProviders />);
    expect(baseElement).toBeTruthy();
  });
});
