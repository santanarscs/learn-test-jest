import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { removeToolRequest } from '../../store/modules/tools/actions';
import { Container, Title } from './styles';

function ToolsItem({ tool }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeToolRequest(tool.id));
  }
  return (
    <Container>
      <Title>
        <strong>{tool.title}</strong>
        <button type="button" data-testid="remove-tool" onClick={handleRemove}>
          <MdClose size={20} color="#F95E5A" />
          remove
        </button>
      </Title>
      <small>{tool.description}</small>
      <ul>
        {tool.tags.map(tag => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </Container>
  );
}

ToolsItem.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
};

export default ToolsItem;
