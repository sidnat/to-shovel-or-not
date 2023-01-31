import determineOutcome from "../determine-outcome";

test('determineOutcome should return -1 when given an empty array', () => {
  const result = determineOutcome([]);
  expect(result).toBe(-1)
})

test('determineOutcome should return -1 when given an array with a length of 1', () => {
  const result = determineOutcome([{total_snow: 1}]);
  expect(result).toBe(-1)
})

describe('determineOutcome shovel results', () => {
  test('it should return 1 when total snow is >= 30mm', () => {
    const result = determineOutcome([{total_snow: 30}, {low: 15}]);
    expect(result).toBe(1)
  })
  
  test('it should return 1 when total snow is within 1mm-29mm and next low <= 0', () => {
    const result = determineOutcome([{total_snow: 29}, {low: 0}]);
    expect(result).toBe(1)
  })
})

test('determineOutcome should return 2 when total rain is > 0mm and next low <= 0', () => {
  const result = determineOutcome([{total_rain: 1}, {low: 0}]);
  expect(result).toBe(2)
})

describe('determineOutcome salt & shovel results', () => {
  test('it should return 3 when total snow is >= 30mm and total rain is > 0mm and next low <= 0', () => {
    const result = determineOutcome([{total_snow: 30, total_rain: 2}, {low: -2}]);
    expect(result).toBe(3)
  })
  
  test('it should return 3 when total snow is within 1mm-29mm and rain is > 0mm next low <= 0', () => {
    const result = determineOutcome([{total_snow: 29}, {low: 0}]);
    expect(result).toBe(3)
  })
})

describe('determineOutcome do nothing results', () => {
  test('it should return 0 when total snow is < 1mm and total rain is < 1mm', () => {
    const result = determineOutcome([{total_snow: 0, total_rain: 0}, {low: -2}]);
    expect(result).toBe(0)
  })
  
  test('it should return 0 when next low > 0 and total snow < 30mm', () => {
    const result = determineOutcome([{total_snow: 29}, {low: 1}]);
    expect(result).toBe(0)
  })
})