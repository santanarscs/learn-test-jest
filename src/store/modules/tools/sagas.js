import { call, put, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as ToolsAction from './actions';

export function* getTools() {
  try {
    const response = yield call(api.get, 'tools');
    yield put(ToolsAction.getToolsSuccess(response.data));
  } catch (err) {
    yield put(ToolsAction.getToolsFailure());
  }
}

export function* addTool({ payload }) {
  const { tool } = payload;
  try {
    const response = yield call(api.post, 'tools', tool);
    yield put(ToolsAction.addToolSuccess(response.data));
    toast.success('Tool created with success!', {
      className: 'notification__success',
      bodyClassName: 'notification__body',
    });
  } catch (err) {
    yield put(ToolsAction.addToolFailure());
    toast.error('Error in tool create ', {
      className: 'notification__danger',
      bodyClassName: 'notification__body',
    });
  }
}

export function* removeTool({ payload }) {
  const { id } = payload;
  try {
    yield call(api.delete, `tools/${id}`);
    yield put(ToolsAction.removeToolSuccess());
    toast.success('Tool removed with success!', {
      className: 'notification__success',
      bodyClassName: 'notification__body',
    });
  } catch (err) {
    yield put(ToolsAction.removeToolFailure());
    toast.error('Error in tool remove ', {
      className: 'notification__danger',
      bodyClassName: 'notification__body',
    });
  }
}
export default all([
  takeLatest('@tools/GET_REQUEST', getTools),
  takeLatest('@tools/ADD_REQUEST', addTool),
  takeLatest('@tools/REMOVE_REQUEST', removeTool),
]);
