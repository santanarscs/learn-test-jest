export function getToolsRequest(data) {
  return {
    type: '@tools/GET_REQUEST',
    data,
  };
}
export function getToolsSuccess(data) {
  return {
    type: '@tools/GET_SUCCESS',
    data,
  };
}
export function getToolsFailure() {
  return {
    type: '@tools/GET_FAILURE',
  };
}
export function addToolRequest(tool) {
  return {
    type: '@tools/ADD_REQUEST',
    tool,
  };
}
export function addToolSuccess(tool) {
  return {
    type: '@tools/ADD_SUCCESS',
    tool,
  };
}
export function addToolFailure() {
  return {
    type: '@tools/ADD_FAILURE',
  };
}

export function removeToolRequest(id) {
  return {
    type: '@tools/REMOVE_REQUEST',
    id,
  };
}
export function removeToolSuccess() {
  return {
    type: '@tools/REMOVE_SUCCESS',
  };
}

export function removeToolFailure() {
  return {
    type: '@tools/REMOVE_FAILURE',
  };
}

export function openToolAddModal() {
  return {
    type: '@tools/OPEN_ADD_MODAL',
  };
}

export function closeToolAddModal() {
  return {
    type: '@tools/CLOSE_ADD_MODAL',
  };
}
