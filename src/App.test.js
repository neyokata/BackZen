// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BackZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BackZen/i);
    expect(titleElement).toBeInTheDocument();
});
