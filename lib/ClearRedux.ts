import { AnyAction, Reducer } from 'redux'

import { ArrayOrUnknown } from './utils/ArrayOrUnknown'

export interface ClearRedux<State, Actions> {
  actions: {
    [key in keyof Actions]: (...args: ArrayOrUnknown<Actions[key]>) => AnyAction
  }
  reducer: Reducer<State>
}
