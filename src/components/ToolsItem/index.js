import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { removeToolRequest } from '~/store/modules/tools/actions';

import Modal from '~/components/Modal';

import { Container, Title, TitleModal, ActionsModal, Button } from './styles';

function ToolsItem({ tool }) {
  const [stateModal, setStateModal] = useState(false);
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeToolRequest(tool.id));
  }
  function openModalRemove() {
    setStateModal(true);
  }
  function handleRemoveCancel() {
    setStateModal(false);
  }
  return (
    <Container>
      <Title>
        <strong>{tool.title}</strong>
        <button type="button" data-testid="open-modal-remove" onClick={() => openModalRemove()}>
          <MdClose size={20} color="#F95E5A" />
          remove
        </button>
      </Title>
      <small>{tool.description}</small>
      {tool.tags.length !== 0 && (
        <ul>
          {tool.tags.map(tag => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      )}
      {stateModal && (
        <Modal>
          <TitleModal>
            <MdClose size={20} /> <h1>Remove Tool</h1>
          </TitleModal>
          <p>Are you sure you want to remove {tool.title}?</p>
          <ActionsModal>
            <Button color="#365DF0" onClick={handleRemoveCancel} type="button">
              Cancel
            </Button>
            <Button
              color="#F95E5A"
              data-testid="remove-tool"
              onClick={handleRemove}
              type="button"
            >
              Yes, remove
            </Button>
          </ActionsModal>
        </Modal>
      )}
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
