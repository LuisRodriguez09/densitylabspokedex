import React from 'react';
import { FC } from 'react';
import { IMoves } from '../../types/pokemons-responss';

interface IMovements {
	moves: IMoves[];
}

const Movements: FC<IMovements> = ({ moves }) => {
	return (
		<div
			className="rounded p-4 bg-blue-78B4 my-5"
			style={{ border: '1px solid black' }}
		>
			<h4 className="font-bold text-2xl">Moves:</h4>
			<ul>
				{moves &&
					moves.map((move) => (
						<li key={move.move.name} className="font-bold text-lg">.- {move.move.name}</li>
					))}
			</ul>
		</div>
	);
};

export default Movements;
