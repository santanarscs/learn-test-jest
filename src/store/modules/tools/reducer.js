export const INITIAL_STATE = {
  data: [],
  loading: false,
  toolStateAddModal: false,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tools/GET_REQUEST':
      return { ...state, loading: true };
    case '@tools/GET_SUCCESS':
      return { ...state, loading: false, data: action.data };
    case '@tools/ADD_REQUEST':
      return { ...state, loading: true };
    case '@tools/ADD_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, action.tool],
      };
    case '@tools/REMOVE_REQUEST':
      return {
        ...state,
        loading: true,
        data: state.data.filter(tool => tool.id !== action.id),
      };
    case '@tools/REMOVE_SUCCESS':
      return { ...state, loading: false };
    case '@tools/OPEN_ADD_MODAL':
      return {
        ...state,
        toolStateAddModal: true,
      };
    case '@tools/CLOSE_ADD_MODAL':
      return {
        ...state,
        toolStateAddModal: false,
      };
    default:
      return state;
  }
}
