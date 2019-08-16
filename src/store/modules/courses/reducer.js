import produce from 'immer';

export const INITIAL_STATE = [];

export default function courses(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case 'ADD_COURSE':
				draft.push(action.payload.course);
				break;
			default:
		}
	});
}
