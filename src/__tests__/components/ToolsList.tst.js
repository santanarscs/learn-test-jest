import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import * as ToolsActions from '~/store/modules/courses/actions';

import ToolsList from '~/components/ToolsList';

jest.mock('react-redux');

describe('ToolsList Component', () => {
	xit('should render tools list', () => {
		useSelector.mockImplementation(cb => cb({}));
	});
});
