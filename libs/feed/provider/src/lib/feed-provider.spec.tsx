import { render } from '@testing-library/react';

import { FeedProvider } from './feed-provider';

describe('FeedProviders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedProvider />);
    expect(baseElement).toBeTruthy();
  });
});
