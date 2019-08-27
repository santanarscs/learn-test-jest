import React from 'react';
import { useDispatch } from 'react-redux';
import { act, render, wait, fireEvent } from '@testing-library/react';
import {
  addToolRequest,
  closeToolAddModal,
} from '~/store/modules/tools/actions';

import ToolsAdd from '~/components/ToolsAdd';

jest.mock('react-redux');

describe('ToolsAdd Component', () => {
  it('should be able to add new tool', async () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const { getByTestId, getByLabelText } = render(<ToolsAdd />);

    fireEvent.change(getByLabelText('Title'), {
      target: { value: 'Title Tool' },
    });
    fireEvent.change(getByLabelText('Link'), {
      target: { value: 'http://github.com/repo/tool' },
    });
    fireEvent.change(getByLabelText('Description'), {
      target: { value: 'Description Tool' },
    });
    fireEvent.change(getByLabelText('Tags'), {
      target: { value: 'tag1, tag2, tag3' },
    });
    act(() => {
      fireEvent.submit(getByTestId('form'));
    });
    await wait(() => {
      expect(dispatch).toHaveBeenCalledWith(
        addToolRequest({
          title: 'Title Tool',
          link: 'http://github.com/repo/tool',
          description: 'Description Tool',
          tags: ['tag1', 'tag2', 'tag3'],
        })
      );
      expect(dispatch).toHaveBeenCalledWith(closeToolAddModal());
    });
  });
});
