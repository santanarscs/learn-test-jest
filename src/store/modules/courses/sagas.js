import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import * as CourseActions from './actions';

export function* getCourses() {
	try {
		const response = yield call(api.get, 'courses');

		yield put(CourseActions.getCoursesSuccess(response.data));
	} catch (err) {
		yield put(CourseActions.getCoursesFailure());
	}
}
