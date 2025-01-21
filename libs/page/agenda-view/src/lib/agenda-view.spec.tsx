import { render } from '@testing-library/react';

import AgendaView from './agenda-view';

describe('AgendaView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AgendaView />);
    expect(baseElement).toBeTruthy();
  });
});
