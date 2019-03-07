import { ClearAction } from '../ClearAction'

export interface FethcingActions {
  request: ClearAction
  failure: ClearAction<[string]>
  success: ClearAction
}
