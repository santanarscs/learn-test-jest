import React, { useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';
import { Container, Header, TitleModal } from './styles';

import ToolsList from '~/components/ToolsList';
import ToolsSearch from '~/components/ToolsSearch';
import ToolsAdd from '~/components/ToolsAdd';
import Modal from '~/components/Modal';

export default function Tools() {
  const [stateModal, setStateModal] = useState(false);

  function changeModal() {
    setStateModal(!stateModal);
  }

  return (
    <Container>
      <Header>
        <ToolsSearch />
        <button type="button" onClick={changeModal}>
          {' '}
          <MdAdd size={20} /> Add
        </button>
      </Header>
      {stateModal && (
        <Modal>
          <TitleModal>
            <h1>New Tool</h1>
            <button type="button" onClick={changeModal}>
              {' '}
              <MdClose size={20} />
            </button>
          </TitleModal>
          <ToolsAdd />
        </Modal>
      )}
      <ToolsList />
    </Container>
  );
}
