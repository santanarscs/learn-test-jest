import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
// import { Container } from './styles';

import ToolsList from '~/components/ToolsList';

export default function Tools() {
  const [stateModal, setStateModal] = useState(false);

  function changeModal() {
    setStateModal(!stateModal);
  }

  return (
    <>
      <div>
        <button type="submit" onClick={changeModal}>
          {' '}
          <MdAdd size={20} /> Add
        </button>
      </div>
      <ToolsList />
    </>
  );
}
