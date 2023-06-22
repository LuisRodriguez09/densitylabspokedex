import { FC } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL_POKEAPI } from "../../constants";

interface ICardPokemon {
  pokemonName: string;
}

const CardPokemon: FC<ICardPokemon> = ({ pokemonName }) => {
  const { data } = useFetch(`${BASE_URL_POKEAPI}${pokemonName}`);
  return (
    <div className="cursor-pointer w-full flex justify-center">
      <img className="bg-cover w-40 h-40" src={data?.sprites?.front_shiny} alt="Pokemon image" />
    </div>
  );
};

export default CardPokemon;
