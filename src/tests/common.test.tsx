import 'jest-canvas-mock'
import { render } from '@testing-library/react'
import { Counter } from '..'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Counter />)
  })
})
