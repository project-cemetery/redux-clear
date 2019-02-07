import { ClearAction } from '../../ClearAction'

import { createClearRedux } from '../../createClearRedux'

describe('createClearRedux', () => {
  describe('actions', () => {
    test('should create actions with one arg', () => {
      type State = number
      interface Actions {
        add: ClearAction<[number]>
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          add: state => amount => state + amount,
        },
        0,
      )

      expect(actions.add(12).payload).toEqual([12])
    })

    test('should create actions with many args', () => {
      type State = number
      interface Actions {
        add: ClearAction<[number, string]>
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          add: state => (amount, param) => state + amount * parseFloat(param),
        },
        0,
      )

      expect(actions.add(12, '2').payload).toEqual([12, '2'])
    })
  })
})
