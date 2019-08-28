import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { openToolAddModal } from '~/store/modules/tools/actions';
import Tools from '~/pages/Tools';

jest.mock('react-redux');

describe('Tools Page', () => {
  it('should open modal', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockImplementation(cb =>
      cb({
        tools: {
          loading: false,
          data: [],
          toolStateAddModal: false,
        },
      })
    );
    const { getByTestId } = render(<Tools />);
    fireEvent.click(getByTestId('open-modal'));
    expect(dispatch).toHaveBeenCalledWith(openToolAddModal());
  });
});
