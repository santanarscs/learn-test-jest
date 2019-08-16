import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import { getCoursesSuccess, getCoursesFailure } from '~/store/modules/courses/actions';
import { getCourses } from '~/store/modules/courses/sagas';

const apiMock = new MockAdapter(api);

describe('Courses saga', () => {
	it('should be able to fetch courses', async () => {
		const dispatch = jest.fn();
		apiMock.onGet('courses').reply(200, ['Node.js']);

		await runSaga({ dispatch }, getCourses).toPromise();

		expect(dispatch).toHaveBeenCalledWith(getCoursesSuccess(['Node.js']));
	});
	it('should fail when api returns error', async () => {
		const dispatch = jest.fn();
		apiMock.onGet('courses').reply(500);

		await runSaga({ dispatch }, getCourses).toPromise();

		expect(dispatch).toHaveBeenCalledWith(getCoursesFailure());
	});
});
