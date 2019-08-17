import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Container } from './styles';

import ToolsItem from "../ToolsItem";
export default function ToolsList() {
  const dispatch = useDispatch();
  const tools = useSelector(state => state.tools.data);

  return (
    <>
      <ul data-testid="tool-list">
        {tools.map(tool => (
          <ToolsItem key={tool.id} tool={tool} />
        ))}
      </ul>
    </>
  );
}
