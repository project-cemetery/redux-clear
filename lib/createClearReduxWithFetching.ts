import { combineReducers } from 'redux'

import { ActionsConfig } from './ActionsConfig'
import { createClearRedux } from './createClearRedux'
import { createFetchingRedux } from './fetching-redux/createFetchingRedux'

export const createClearReduxWithFetching = <State, Actions>(
  actionsConfig: ActionsConfig<State, Actions>,
  initialState: State,
  tag: string = '',
) => {
  const fetchingClearRedux = createFetchingRedux(`${tag}/fetching`)

  const dataClearRedux = createClearRedux(actionsConfig, initialState, tag)

  return {
    reducer: combineReducers({
      fetching: fetchingClearRedux.reducer,
      data: dataClearRedux.reducer,
    }),
    actions: {
      fetching: fetchingClearRedux.actions,
      data: dataClearRedux.actions,
    },
  }
}
