import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Your need to be logged in to see this page");
  expect(linkElement).toBeInTheDocument();
});
