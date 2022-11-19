

import SearchComponent from './SearchComponent'
import { cleanup,screen, render, fireEvent} from '@testing-library/react'


afterEach(()=>{
  cleanup()
})
test('renders to document', ()=>{
  render(<SearchComponent/>)
  const form = screen.getByTestId('form')

  expect(form).toBeTruthy()
})


