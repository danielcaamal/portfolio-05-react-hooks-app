import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MainApp } from '../../src/09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';


describe('MainApp', () => {
    it('should render', () => {
        const { container } = render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    it('should show HomePage', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
        const title = container.querySelector('#home-page-title') as HTMLHeadingElement;
        expect(title.textContent).toContain('HomePage: ');
    });

    it('should show LoginPage', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
        const title = container.querySelector('#login-page-title') as HTMLHeadingElement;
        expect(title.textContent).toContain('LoginPage');
    });
});