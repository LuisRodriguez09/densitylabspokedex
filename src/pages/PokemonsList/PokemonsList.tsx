import { FC, useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL_POKEAPI, ITEMS_PER_PAGE } from "../../constants";
import { IPokemon } from "../../types/pokemons-responss";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Paginations/Pagination";
import { useAppDispatch } from "../../redux/hooks";
import { getSinglePokemonInfo } from "../../dispatchers/pokemonsDispatchers";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import ScreenPokedex from "../../components/ScreenPokedex/ScreenPokedex";

const PokemonsList: FC = () => {
  const { data } = useFetch(`${BASE_URL_POKEAPI}?limit=100000&offset=0`);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    name: string
  ) => {
    switch (event.detail) {
      case 1: {
        dispatch(getSinglePokemonInfo(name));
        break;
      }
      case 2: {
        navigate(`/pokemon/${name}`);
        break;
      }
      default: {
        break;
      }
    }
  };

  const [items, setItems] = useState<IPokemon[]>([]);

  useEffect(() => {
    if (data?.results) {
      setItems([...data.results].splice(0, ITEMS_PER_PAGE));
    }
  }, [data]);

  return (
    <main className=" bg-cyan-E0FF h-auto">
      <div className="flex">
        <aside className="w-1/4">
          <ScreenPokedex />
        </aside>
        <aside className="w-3/4">
          <Pagination items={data} setItems={setItems} />
          <div
            className="container"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKWCDCXFRcCTfsHveZInRYOWVRF7oRK7JuA&usqp=CAU)`,
            }}
          >
            <ul className="grid grid-cols-3 gap-4">
              {items.length &&
                items.map(({ name }: IPokemon) => (
                  <li
                    className="flex justify-center"
                    onClick={(event) => handleClick(event, name)}
                    key={name}
                  >
                    <CardPokemon pokemonName={name} />
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default PokemonsList;
