
import React from 'react';
import { render } from '@testing-library/react';
import Stats from './Stats';

test('Stats', () => {
	const stats = [
		{ base_stat: 1, stat: { name: 'Stat 1' } },
		{ base_stat: 2, stat: { name: 'Stat 2' } },
	];

	const component = render(<Stats stats={stats} />);

	component.getByText('Stats:')

});
