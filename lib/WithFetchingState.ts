import { FetchingState } from './fetching-redux/FetchingState'

export interface WithFetchingState<State> {
  fetching: FetchingState
  data: State
}
