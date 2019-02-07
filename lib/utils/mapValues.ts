interface Dict<T> {
  [key: string]: T
}

export const mapValues = <Input, Output>(
  obj: Dict<Input>,
  callback: (value: Input, key: string) => Output,
): Dict<Output> =>
  Object.entries(obj)
    .map(([key, value]) => ({ key, value }))
    .map(({ key, value }) => ({
      key,
      value: callback(value, key),
    }))
    .reduce(
      (prev, curr) => ({
        ...prev,
        [curr.key]: curr.value,
      }),
      {},
    )
