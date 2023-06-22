import React from 'react';
import { render } from '@testing-library/react';
import PokemonsList from './PokemonsList';

describe('MyComponent', () => {
	it('should have ul tag with flex display', () => {
		const { getByRole } = render(<PokemonsList />);
		const ulElement = getByRole('list');

		expect(ulElement).toHaveStyle(
			'grid-template-columns: repeat(3, minmax(0, 1fr))'
		);
	});
});
