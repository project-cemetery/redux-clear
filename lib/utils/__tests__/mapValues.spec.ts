import { mapValues } from '../mapValues'

describe('mapValues', () => {
  test('should return empty fot empty input', () => {
    expect(mapValues({}, c => c)).toEqual({})
  })

  test('should return the same object for empty callback', () => {
    const input = {
      a: 1,
      b: 2,
      c: 4,
    }

    expect(mapValues(input, c => c)).toEqual(input)
  })

  test('should return the mapped object', () => {
    const input = {
      a: '1',
      b: '2',
    }

    const output = {
      a: 12,
      b: 24,
    }

    expect(mapValues(input, c => parseInt(c, 10) * 12)).toEqual(output)
  })
})
