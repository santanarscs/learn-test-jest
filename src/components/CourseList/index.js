import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from '../../store/modules/courses/actions';
// import { Container } from './styles';

export default function CourseList() {
	const [newCourse, setNewCourse] = useState('');

	const dispatch = useDispatch();
	const courses = useSelector(state => state.courses);

	function handleAddCourse() {
		dispatch(addCourse(newCourse));
		setNewCourse('');
	}

	return (
		<form data-testid="course-form" onSubmit={handleAddCourse}>
			<ul data-testid="course-list">{courses.map(course => <li key={course}>{course}</li>)}</ul>
			<label htmlFor="course">Course</label>
			<input id="course" type="text" value={newCourse} onChange={e => setNewCourse(e.target.value)} />
			<button type="submit">Adicionar</button>
		</form>
	);
}
