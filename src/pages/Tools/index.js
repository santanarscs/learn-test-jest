import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { openToolModal } from '~/store/modules/tools/actions';

import { Container, Header, TitleModal } from './styles';

import ToolsList from '~/components/ToolsList';
import ToolsSearch from '~/components/ToolsSearch';
import ToolsAdd from '~/components/ToolsAdd';
import Modal from '~/components/Modal';

export default function Tools() {
  const dispatch = useDispatch();
  const toolStateModal = useSelector(state => state.tools.toolStateModal);

  function openModal() {
    dispatch(openToolModal());
  }

  return (
    <Container>
      <Header>
        <ToolsSearch />
        <button type="button" onClick={openModal}>
          {' '}
          <MdAdd size={20} /> Add
        </button>
      </Header>
      {toolStateModal && (
        <Modal>
          <TitleModal>
            <MdAdd size={30} /> <h1>Add new Tool</h1>
          </TitleModal>
          <ToolsAdd />
        </Modal>
      )}
      <ToolsList />
    </Container>
  );
}
