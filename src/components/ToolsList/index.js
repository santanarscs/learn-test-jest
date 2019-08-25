import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdMoodBad } from 'react-icons/md';
import { getToolsRequest } from '~/store/modules/tools/actions';
import { Container, Loading, EmptyData } from './styles';

import ToolsItem from '../ToolsItem';

export default function ToolsList() {
  const dispatch = useDispatch();
  const tools = useSelector(state => state.tools);

  useEffect(() => {
    const data = null;
    dispatch(getToolsRequest(data));
  }, [dispatch]);

  return (
    <Container>
      {tools.loading && <Loading>Carregando</Loading>}
      {!tools.loading && tools.data.length === 0 && (
        <EmptyData>
          <MdMoodBad size={50} color="#B1ADB9" />
          Sem registros
        </EmptyData>
      )}
      <ul data-testid="tool-list">
        {tools.data.map(tool => (
          <ToolsItem key={tool.id} tool={tool} />
        ))}
      </ul>
    </Container>
  );
}
