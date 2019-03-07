import { Option } from 'tsoption'

import { createClearRedux } from '../createClearRedux'
import { FethcingActions } from './FetchingActions'
import { FetchingState } from './FetchingState'

export const createFetchingRedux = (key: string) =>
  createClearRedux<FetchingState, FethcingActions>(
    {
      request: () => () => ({
        loading: true,
        error: Option.of(null),
      }),
      failure: () => error => ({
        loading: false,
        error: Option.of(error),
      }),
      success: () => () => ({
        loading: false,
        error: Option.of(null),
      }),
    },
    {
      loading: false,
      error: Option.of(null),
    },
    key,
  )
