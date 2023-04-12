import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('HomePage', () => {
    it('should render', () => {
        const { container } = render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with user', () => {
        const value = { user: { name: 'John' } };
        const { container } = render(
            <UserContext.Provider value={value}>
                <HomePage />
            </UserContext.Provider>
        );
        expect(container).toMatchSnapshot();
        const pre = container.querySelector('#home-page-pre') as HTMLPreElement;
        expect(pre.textContent).toContain(value.user.name)
    });

    it ('should set user', () => {
        const value = { user: null, setUserContext: jest.fn() };
        const { container } = render(
            <UserContext.Provider value={value}>
                <HomePage />
            </UserContext.Provider>
        );
        const button = container.querySelector('#home-page-button') as HTMLButtonElement;
        fireEvent.click(button);
        expect(value.setUserContext).toHaveBeenCalled();
    });
});