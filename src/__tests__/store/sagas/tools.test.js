import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import * as ToolsActions from '~/store/modules/tools/actions';
import * as ToolsSagas from '~/store/modules/tools/sagas';

const apiMock = new MockAdapter(api);
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

describe('Tools saga', () => {
  it('should be able to fetch tools', async () => {
    const dispatch = jest.fn();
    apiMock.onGet('tools').reply(200, tools);

    await runSaga({ dispatch }, ToolsSagas.getTools).toPromise();

    expect(dispatch).toHaveBeenCalledWith(ToolsActions.getToolsSuccess(tools));
  });
  it('should be able to fecth tools with search', async () => {
    const dispatch = jest.fn();
    const data = { term: 'Notion', tagsOnly: false };
    apiMock.onGet('tools?q=Notion').reply(200, tools);

    await runSaga({ dispatch }, ToolsSagas.getTools, data).toPromise();

    expect(dispatch).toHaveBeenCalledWith(ToolsActions.getToolsSuccess(tools));
  });
  it('should be able to fecth tools with search and tagsOnly', async () => {
    const dispatch = jest.fn();
    const data = { term: 'Notion', tagsOnly: true };
    apiMock.onGet('tools?tags_like=Notion').reply(200, tools);

    await runSaga({ dispatch }, ToolsSagas.getTools, data).toPromise();

    expect(dispatch).toHaveBeenCalledWith(ToolsActions.getToolsSuccess(tools));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();
    apiMock.onGet('tools').reply(500);

    await runSaga({ dispatch }, ToolsSagas.getTools).toPromise();

    expect(dispatch).toHaveBeenCalledWith(ToolsActions.getToolsFailure());
  });

  it('should be able to add new tool', async () => {
    const dispatch = jest.fn();
    apiMock.onPost('tools').reply(200, tools[0]);
    await runSaga({ dispatch }, ToolsSagas.addTool, tools[0]).toPromise();
    expect(dispatch).toHaveBeenCalledWith(
      ToolsActions.addToolSuccess(tools[0])
    );
  });

  it('should fail when to add new tool', async () => {
    const dispatch = jest.fn();
    apiMock.onPost('tools').reply(500);
    await runSaga({ dispatch }, ToolsSagas.addTool, tools[0]).toPromise();
    expect(dispatch).toHaveBeenCalledWith(ToolsActions.addToolFailure());
  });

  it('should be able to remove tool', async () => {
    const dispatch = jest.fn();
    apiMock.onDelete(`tools/1`).reply(200);

    await runSaga({ dispatch }, ToolsSagas.removeTool, { id: 1 }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(ToolsActions.removeToolSuccess());
  });

  it('should fail when to remove tool', async () => {
    const dispatch = jest.fn();
    apiMock.onDelete('tools').reply(500);
    await runSaga({ dispatch }, ToolsSagas.removeTool, 1).toPromise();
    expect(dispatch).toHaveBeenCalledWith(ToolsActions.removeToolFailure());
  });
});
