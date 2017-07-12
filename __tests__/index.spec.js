const index = require('../');
jest.mock('lodash/fp/add');

it('should mock lodash/sum', () => {
  expect(index).toBe(1);
})
