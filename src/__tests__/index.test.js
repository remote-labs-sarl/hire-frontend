import { render } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
    test('renders the  Home page page', () => {
        render(<Home/>)
    });
});