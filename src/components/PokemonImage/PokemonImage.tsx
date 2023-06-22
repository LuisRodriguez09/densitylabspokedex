import { FC, useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

const PokemonImage: FC = () => {
  const { currentPokemon } = useAppSelector((state) => state.pokemons);

  const [imagePokemon, setImagePokemon] = useState<string | undefined>(
    currentPokemon?.sprites?.front_shiny
  );

  useEffect(() => {
    setImagePokemon(currentPokemon?.sprites?.front_shiny);
  }, [currentPokemon]);

  return (
    <aside className="flex justify-center p-4">
      {imagePokemon && (
        <div className=" bg-blue-78B4 w-full h-60 rounded-lg border flex justify-center items-center">
          {imagePokemon && (
            <img className="w-72 h-72 bg-cover " src={imagePokemon} alt="Pokemon image" />
          )}
        </div>
      )}
    </aside>
  );
};

export default PokemonImage;
