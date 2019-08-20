import React from 'react';
import { Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { addToolRequest } from '../../store/modules/tools/actions';
import Form from './styles';

export default function ToolsAdd() {
  const dispatch = useDispatch();

  function handleAddTool(tool) {
    dispatch(addToolRequest(tool));
  }

  return (
    <Form onSubmit={handleAddTool}>
      <Input name="title" label="Title" />
      <Input name="description" label="Description" />
      <button type="submit">Adicionar</button>
    </Form>
  );
}
