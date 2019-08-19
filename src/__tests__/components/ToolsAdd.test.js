import React from 'react';
import { useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { addToolRequest } from '~/store/modules/tools/actions';

import ToolsAdd from '~/components/ToolsAdd';

jest.mock('react-redux');

describe('ToolsAdd Component', () => {
	it('should be able to add new tool', () => {
		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		const { getByTestId, getByLabelText } = render(<ToolsAdd />);
		fireEvent.change(getByLabelText('title'), {
			target: { value: 'Title Tool' }
		});
		fireEvent.change(getByLabelText('description'), {
			target: { value: 'Description Tool' }
		});
		fireEvent.submit(getByTestId('form'));

		expect(dispatch).toHaveBeenCalledWith(addToolRequest({ title: 'Title Tool', description: 'Description Tool' }));
	});
});
