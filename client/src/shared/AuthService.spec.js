import * as Auth from './AuthService'

// todo: tests

// todo: mock localStorage to be able test other methods

it('Smoke tests', () => {
  expect(Auth.getCurrentUser).toBeDefined()
  expect(Auth.setCurrentUser).toBeDefined()
})
