import reducer, { INITIAL_STATE } from '~/store/modules/tools/reducer';
import * as Tools from '~/store/modules/tools/actions';

const tools = [
  {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
  {
    id: 2,
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
];

describe('Tools reducer', () => {
  it('@tools/DEFAULT', () => {
    const state = reducer(undefined, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });
  it('@tools/GET_TOOLS_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Tools.getToolsRequest());
    expect(state).toStrictEqual({
      data: [],
      loading: true,
      toolStateAddModal: false,
    });
  });
  it('@tools/GET_TOOLS_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Tools.getToolsSuccess(tools));
    expect(state).toStrictEqual({
      data: tools,
      loading: false,
      toolStateAddModal: false,
    });
  });
  it('@tools/ADD_TOOL_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Tools.addToolRequest(tools[0]));
    expect(state).toStrictEqual({
      data: [],
      loading: true,
      toolStateAddModal: false,
    });
  });
  it('@tools/ADD_TOOL_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Tools.addToolSuccess(tools[0]));
    expect(state).toStrictEqual({
      data: [tools[0]],
      loading: false,
      toolStateAddModal: false,
    });
  });
  it('@tools/REMOVE_TOOL_REQUEST', () => {
    const state = reducer(
      { data: tools, loading: false, toolStateAddModal: false },
      Tools.removeToolRequest(1)
    );
    expect(state).toStrictEqual({
      data: tools.filter(tool => tool.id !== 1),
      loading: true,
      toolStateAddModal: false,
    });
  });
  it('@tools/REMOVE_TOOL_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Tools.removeToolSuccess());
    expect(state).toStrictEqual({
      data: [],
      loading: false,
      toolStateAddModal: false,
    });
  });
  it('@tools/OPEN_ADD_MODAL', () => {
    const state = reducer(INITIAL_STATE, Tools.openToolAddModal());
    expect(state).toStrictEqual({
      data: [],
      loading: false,
      toolStateAddModal: true,
    });
  });
  it('@tools/CLOSE_ADD_MODAL', () => {
    const state = reducer(INITIAL_STATE, Tools.closeToolAddModal());
    expect(state).toStrictEqual({
      data: [],
      loading: false,
      toolStateAddModal: false,
    });
  });
});
