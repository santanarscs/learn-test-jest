export function addCourse(course) {
	return {
		type: 'ADD_COURSE',
		payload: { course }
	};
}
export function getCoursesSuccess(data) {
	return {
		type: 'GET_COURSES_SUCCESS',
		payload: { data }
	};
}
export function getCoursesFailure() {
	return {
		type: 'GET_COURSES_FAILURE'
	};
}
