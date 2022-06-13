import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import App from "./App";

let queries: RenderResult

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  queries = render(<App />)
})

test('sum', () => {
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(queries.getByText('Tire duvidas da sua audiência em tempo-real')).toBeInTheDocument()
})


test('Img illustration', () => {
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(queries.getByAltText('Illustration img')).toBeInTheDocument()
})


export { }