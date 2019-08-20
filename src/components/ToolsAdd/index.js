import React from 'react';
import { Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  addToolRequest,
  closeToolAddModal,
} from '~/store/modules/tools/actions';
import Form from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Field Title is required'),
  link: Yup.string(),
  description: Yup.string().required('Field Description is required'),
  tags: Yup.string().required('Field tags is required'),
});

export default function ToolsAdd() {
  const dispatch = useDispatch();

  function mountTag(tags) {
    return tags
      .replace(/,/g, ' ')
      .split(' ')
      .filter(item => item !== '');
  }
  function handleAddTool(tool, { resetForm }) {
    const data = { ...tool, tags: mountTag(tool.tags) };
    dispatch(addToolRequest(data));
    resetForm();
    dispatch(closeToolAddModal());
  }

  return (
    <Form onSubmit={handleAddTool} schema={schema}>
      <Input name="title" label="Title" />
      <Input name="link" label="Link" />
      <Input name="description" label="Description" multiline rows="5" />
      <Input name="tags" label="Tags" />
      <button type="submit">Add Tool</button>
    </Form>
  );
}
