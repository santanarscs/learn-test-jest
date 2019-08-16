import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { addCourse } from '~/store/modules/courses/actions';
import CourseList from '~/components/CourseList';

jest.mock('react-redux');

describe('CouseList component', () => {
	it('should render tech list', () => {
		useSelector.mockImplementation(cb =>
			cb({
				courses: ['Node.js', 'ReactJS']
			})
		);

		const { getByTestId, getByText } = render(<CourseList />);
		expect(getByTestId('course-list')).toContainElement(getByText('Node.js'));
		expect(getByTestId('course-list')).toContainElement(getByText('ReactJS'));
	});

	it('should be able to add new tech', () => {
		const { getByTestId, getByLabelText } = render(<CourseList />);

		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);

		fireEvent.change(getByLabelText('Course'), { target: { value: 'ReactNative' } });
		fireEvent.submit(getByTestId('course-form'));

		expect(dispatch).toHaveBeenCalledWith(addCourse('ReactNative'));
	});
});
