import { ClearAction } from '../../ClearAction'

import { createClearRedux } from '../../createClearRedux'

describe('createClearRedux', () => {
  describe('actions', () => {
    test('should use inital state for undefined', () => {
      type State = number
      interface Actions {
        add: ClearAction<[number]>
      }

      const { actions, reducer } = createClearRedux<State, Actions>(
        {
          add: state => amount => state + amount,
        },
        12,
      )

      const newState = reducer(undefined, actions.add(11))

      expect(newState).toEqual(23)
    })

    test('should return current state for unknown action', () => {
      type State = number
      interface Actions {
        add: ClearAction<[number]>
      }

      const { actions, reducer } = createClearRedux<State, Actions>(
        {
          add: state => amount => state + amount,
        },
        12,
      )

      const newState = reducer(undefined, { type: 'strange' })

      expect(newState).toEqual(12)
    })

    test('should create new state for action with one arg', () => {
      type State = number
      interface Actions {
        add: ClearAction<[number]>
      }

      const { actions, reducer } = createClearRedux<State, Actions>(
        {
          add: state => amount => state + amount,
        },
        0,
      )

      const newState = reducer(0, actions.add(12))

      expect(newState).toEqual(12)
    })

    test('should create new state for action with many args', () => {
      type State = number
      interface Actions {
        addAndMult: ClearAction<[number, string]>
      }

      const { actions, reducer } = createClearRedux<State, Actions>(
        {
          addAndMult: state => (amount, param) =>
            (state + amount) * parseInt(param, 10),
        },
        0,
      )

      const newState = reducer(0, actions.addAndMult(12, '2'))

      expect(newState).toEqual(24)
    })
  })
})
