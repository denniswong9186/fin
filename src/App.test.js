import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { auth } from './firebase'; // Adjust the import path as needed

test('renders sign in and sign up links when not authenticated', () => {
  // Mock the onAuthStateChanged method to simulate a user being not signed in.
  jest.spyOn(auth, 'onAuthStateChanged').mockImplementationOnce((callback) => callback(null));
  
  render(<Router><App /></Router>);
  
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
});

test('renders welcome message when authenticated', () => {
  // Mock the onAuthStateChanged method to simulate a user being signed in.
  jest.spyOn(auth, 'onAuthStateChanged').mockImplementationOnce((callback) => callback({email: 'test@example.com'}));
  
  render(<Router><App /></Router>);
  
  expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
});