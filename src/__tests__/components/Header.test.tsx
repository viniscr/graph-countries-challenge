import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';
import { Country } from '../../models/country';

describe('Header component', () => {
    it('renders a Header', () => {
        render(<Header hasSearch={true} />);
        expect(screen.getByTestId('header')).not.toBeNull();
    });

    it('renders the header title',() => {
        render(<Header hasSearch={true} />);
        expect(screen.getByTestId('header-title')).not.toBeNull();
    })

    it('renders a header with search bar',() => {
        render(<Header hasSearch={true} />);
        expect(screen.getByTestId('header-search')).not.toBeNull();
    })

    it('renders a header without a search bar',() => {
        render(<Header hasSearch={false} />);
        expect(screen.queryByTestId('header-search')).not.toBeInTheDocument
    })
});