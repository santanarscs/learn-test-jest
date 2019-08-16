import reducer, { INITIAL_STATE } from '~/store/modules/courses/reducer';
import * as Courses from '~/store/modules/courses/actions';

describe('Course reducer', () => {
	it('DEFAULT', () => {
		const state = reducer(undefined, {});
		expect(state).toStrictEqual(INITIAL_STATE);
	});
	it('ADD_COURSE', () => {
		const state = reducer(INITIAL_STATE, Courses.addCourse('Node.js'));

		expect(state).toStrictEqual(['Node.js']);
	});
});
