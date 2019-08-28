import React from 'react';
import { useDispatch } from 'react-redux';
import { render, fireEvent, wait } from '@testing-library/react';
import { getToolsRequest } from '~/store/modules/tools/actions';

import ToolsSearch from '~/components/ToolsSearch';

jest.mock('react-redux');
describe('ToolsSearch Component', () => {
  it('should be able find tools', async () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByLabelText } = render(<ToolsSearch />);
    fireEvent.change(getByLabelText('search-input'), {
      target: { value: 'Term search' },
    });
    await wait(() => {
      expect(dispatch).toHaveBeenCalledWith(
        getToolsRequest({ term: 'Term search', tagsOnly: false })
      );
    });
  });
  it('should be able find tools with tags', async () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByLabelText } = render(<ToolsSearch />);
    fireEvent.change(getByLabelText('search-input'), {
      target: { value: 'Term search' },
    });
    fireEvent.click(getByLabelText('search-checkbox'));
    await wait(() => {
      expect(dispatch).toHaveBeenCalledWith(
        getToolsRequest({ term: 'Term search', tagsOnly: true })
      );
    });
  });
});
