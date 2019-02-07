import { ClearAction } from '../../ClearAction'

import { createClearRedux } from '../../createClearRedux'

describe('createClearRedux', () => {
  describe('actions', () => {
    test('should create actions without payload', () => {
      type State = number
      interface Actions {
        set: ClearAction
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          set: state => () => 12,
        },
        0,
      )

      expect(actions.set().type.length).toBeGreaterThan(1)
    })

    test('should create actions with stable type', () => {
      type State = number
      interface Actions {
        set: ClearAction
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          set: state => () => 12,
        },
        0,
      )

      const action1 = actions.set()
      const action2 = actions.set()

      expect(action1.type).toEqual(action2.type)
    })

    test('should create actions with uniqu type', () => {
      type State = number
      interface Actions {
        set: ClearAction
        reset: ClearAction
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          set: state => () => 12,
          reset: state => () => 0,
        },
        0,
      )

      const action1 = actions.set()
      const action2 = actions.reset()

      expect(action1.type).not.toEqual(action2.type)
    })

    test('should create actions with readable type', () => {
      type State = number
      interface Actions {
        set: ClearAction
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          set: state => () => 12,
        },
        0,
      )

      expect(actions.set().type).toContain('set')
    })

    test('should create actions with tagged type', () => {
      type State = number
      interface Actions {
        set: ClearAction
      }

      const { actions } = createClearRedux<State, Actions>(
        {
          set: state => () => 12,
        },
        0,
        'domain',
      )

      expect(actions.set().type).toContain('domain')
      expect(actions.set().type).toContain('set')
    })
  })
})
