import { render, screen } from '@testing-library/react';
import'@testing-library/jest-dom/extend-expect';
import SeeQuery from './components/seeQuery';

// testi että ei tule mitään ylimääräistä
test('renders seeQuery', () => {
  
  const row = [{
     name: 'namee'}
  ];
  render(<SeeQuery questions={row}/>);
  const tablecell = screen.queryByText(/namee/i);
  expect(tablecell).not.toBeInTheDocument();
});
