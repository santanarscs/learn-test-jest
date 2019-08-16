export function getToolsRequest(data) {
	return {
		type: '@tools/GET_REQUEST',
		payload: { data }
	};
}
export function getToolsSuccess(data) {
	return {
		type: '@tools/GET_SUCCESS',
		payload: { data }
	};
}
export function getToolsFailure() {
	return {
		type: '@tools/GET_FAILURE'
	};
}
export function addToolRequest(tool) {
	return {
		type: '@tools/ADD_REQUEST',
		payload: { tool }
	};
}
export function addToolSuccess(tool) {
	return {
		type: '@tools/ADD_SUCCESS',
		payload: { tool }
	};
}
export function addToolFailure() {
	return {
		type: '@tools/ADD_FAILURE'
	};
}

export function removeToolRequest(id) {
	return {
		type: '@tools/REMOVE_REQUEST',
		payload: { id }
	};
}
export function removeToolSuccess() {
	return {
		type: '@tools/REMOVE_SUCCESS'
	};
}

export function removeToolFailure() {
	return {
		type: '@tools/REMOVE_FAILURE'
	};
}
