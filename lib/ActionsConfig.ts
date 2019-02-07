import { ArrayOrUnknown } from './utils/ArrayOrUnknown'

export type ActionsConfig<State, Actions> = {
  [key in keyof Actions]: (
    state: State,
  ) => (...args: ArrayOrUnknown<Actions[key]>) => State
}
