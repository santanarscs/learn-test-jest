import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToolsRequest } from '~/store/modules/tools/actions';
import { Container } from './styles';

import ToolsItem from '../ToolsItem';

export default function ToolsList() {
  const dispatch = useDispatch();
  const tools = useSelector(state => state.tools.data);

  useEffect(() => {
    dispatch(getToolsRequest());
  }, [dispatch]);

  return (
    <Container>
      <ul data-testid="tool-list">
        {tools.map(tool => (
          <ToolsItem key={tool.id} tool={tool} />
        ))}
      </ul>
    </Container>
  );
}
