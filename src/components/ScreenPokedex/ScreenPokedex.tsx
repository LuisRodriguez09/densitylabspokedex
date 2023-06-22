import { FC } from "react";
import PokemonImage from "../PokemonImage/PokemonImage";
import { useAppSelector } from "../../redux/hooks";

const ScreenPokedex: FC = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemons);

  return (
    <div className="bg-gray-7878 h-full">
      <h1 className="text-center font-bold">Info Pokemon</h1>
      <PokemonImage />
      <div className="bg-pruple-8F78 h-full p-4">
        <h5 className="text-center text-4xl">
          {currentPokemon?.name?.toUpperCase()} /{" "}
          {currentPokemon?.name?.toUpperCase()}
        </h5>
      </div>
    </div>
  );
};

export default ScreenPokedex;
