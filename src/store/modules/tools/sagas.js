import { call, put, takeLatest, all } from 'redux-saga/effects';

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

export function* addTool(tool) {
  try {
    const response = yield call(api.post, 'tools', tool);
    yield put(ToolsAction.addToolSuccess(response.data));
  } catch (err) {
    yield put(ToolsAction.addToolFailure());
  }
}

export function* removeTool(id) {
  try {
    yield call(api.delete, `tools/${id}`);
    yield put(ToolsAction.removeToolSuccess());
  } catch (err) {
    yield put(ToolsAction.removeToolFailure());
  }
}
export default all([
  takeLatest('@tools/GET_REQUEST', getTools),
  takeLatest('@tools/ADD_REQUEST', addTool),
  takeLatest('@tools/REMOVE_REQUEST', removeTool),
]);
