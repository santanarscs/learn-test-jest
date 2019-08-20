import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import * as ToolsActions from '~/store/modules/courses/actions';

import ToolsList from '~/components/ToolsList';

const tools = [
  {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
  {
    id: 2,
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
];
jest.mock('react-redux');

describe('ToolsList Component', () => {
  it('should render tools list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        tools: {
          loading: false,
          data: tools,
        },
      })
    );
    const { getByTestId, getByText } = render(<ToolsList />);
    expect(getByTestId('tool-list')).toContainElement(getByText('json-server'));
  });
});
