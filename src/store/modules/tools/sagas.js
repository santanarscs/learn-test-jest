import { call, put } from 'redux-saga/effects';

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
		yield call(api.delete, 'tools', id);
		yield put(ToolsAction.removeToolSuccess());
	} catch (err) {
		yield put(ToolsAction.removeToolFailure());
	}
}
