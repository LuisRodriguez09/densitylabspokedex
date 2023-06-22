import { FC } from "react";
import { ITypes } from "../../types/pokemons-responss";

interface ITypePokemon {
  types: ITypes[];
}

const TypePokemon: FC<ITypePokemon> = ({ types }) => {
  return (
    <div
      className="flex flex-col bg-blue-78B4 rounded-lg p-4"
      style={{ border: "1px solid black" }}
    >
      <h3 className="font-bold text-2xl">Types:</h3>
      <ul>
        {types &&
          types.map((type) => (
            <li key={type.type.name} className="font-bold">
              - {type.type.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TypePokemon;
