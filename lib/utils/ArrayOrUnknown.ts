export type ArrayOrUnknown<T> = T extends any[] ? T : Array<unknown>
