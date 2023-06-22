
import React from 'react';
import { render } from '@testing-library/react';
import Movements from './Movements';

test('Movements', () => {
	const moves = [
		{ move: { name: 'Move 1' } },
		{ move: { name: 'Move 2' } },
		{ move: { name: 'Move 3' } },
	];

	const component = render(<Movements moves={moves} />);

	component.getByText('Moves:')

});
