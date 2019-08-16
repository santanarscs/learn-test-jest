export const INITIAL_STATE = {
	data: [],
	loading: false
};

export default function courses(state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@tools/GET_REQUEST':
			return { ...state, loading: true };
		case '@tools/GET_SUCCESS':
			return { ...state, loading: false, data: action.payload.data };
		case '@tools/ADD_REQUEST':
			return { ...state, loading: true };
		case '@tools/ADD_SUCCESS':
			return { ...state, data: [...state.data, action.payload.tool] };
		case '@tools/REMOVE_REQUEST':
			return { ...state, loading: true, data: state.data.filter(tool => tool.id !== action.payload.id) };
		case '@tools/REMOVE_SUCCESS':
			return { ...state, loading: false };
		default:
			return state;
	}
}
