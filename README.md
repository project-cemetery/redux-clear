# redux-clear

## Instalation

`yarn add redux-clear`

## Usage 

```ts

import { createClearRedux, ClearAction } from 'redux-clear'

type State = number
interface Actions {
  addAndMult: ClearAction<[number, number]>
}

const { actions, reducer } = createClearRedux<State, Actions>(
  {
    addAndMult: state => (amount, param) => state + amount * param,
  },
  0,
)

actions.addAndMult(12, 2) // just didpatch it
reducer // just pass it to `combineReducers`

```
