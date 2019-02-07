import * as nanoid from 'nanoid'
import { Reducer } from 'redux'

import { ActionsConfig } from './ActionsConfig'
import { ClearRedux } from './ClearRedux'
import { mapValues } from './utils/mapValues'

const createTypeCreator = (tag: string) => (key: string) =>
  `${nanoid()}__${tag}/${key}`

const originalConfig = Symbol('originalConfig')
const futureType = Symbol('futureType')

export const createClearRedux = <State, Actions>(
  actionsConfig: ActionsConfig<State, Actions>,
  initialState: State,
  tag: string = '',
): ClearRedux<State, Actions> => {
  const createType = createTypeCreator(tag)

  const actions = mapValues(actionsConfig, (config, key) => {
    const type = createType(key)

    const actionCreator = (...payload) => ({
      type,
      payload,
    })

    actionCreator[originalConfig] = config
    actionCreator[futureType] = type

    return actionCreator
  })

  const reducer: Reducer = (state = initialState, action) => {
    const currentActionCreator = Object.values(actions).find(
      actionCreator => actionCreator[futureType] === action.type,
    )

    if (!currentActionCreator) {
      return state
    }

    const currentConfig = currentActionCreator[originalConfig]

    return currentConfig(state)(...(action.payload || []))
  }

  return {
    actions: actions as any,
    reducer,
  }
}
