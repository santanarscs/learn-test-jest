import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch } from "react-redux";
import { addToolRequest } from "../../store/modules/tools/actions";
// import { Container } from './styles';

export default function ToolsAdd() {
  const dispatch = useDispatch();

  function handleAddTool(tool) {
    dispatch(addToolRequest(tool));
  }

  return (
    <Form onSubmit={handleAddTool}>
      <Input name="title" />
      <Input name="description" />
      <button type="submit">Adicionar</button>
    </Form>
  );
}
