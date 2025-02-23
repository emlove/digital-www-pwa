import type { Dispatch, SetStateAction } from 'react';

export interface TopNavState {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}
