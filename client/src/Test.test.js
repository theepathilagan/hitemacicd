import { render, screen } from '@testing-library/react';
import Test from './Test';

test('Test unitaire simple', () => {
  render(<Test />);
  const linkElement = screen.getByText("Ceci est un test");
  expect(linkElement).toBeInTheDocument();
});