import { FC } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL_POKEAPI, POKEBALL_IMAGE } from "../../constants";
import { useParams } from "react-router-dom";
import CenterBarPokedex from "../../common/CenterBarPokedex/CenterBarPokedex";
import Stats from "../../components/Stats/Stats";
import TypePokemon from "../../components/TypePokemon/TypePokemon";
import CardImagePokemon from "../../components/CardImagePokemon/CardImagePokemon";
import Movements from "../../components/Movements/Movements";
import BackButton from "./BackButton";

interface IAbility {
  ability: {
    name: string;
  };
}

const Pokemon: FC = () => {
  const { name } = useParams();
  const { data: infoPokemon } = useFetch(`${BASE_URL_POKEAPI}${name}`);

  return (
    <main className="px-28 py-14 bg-cyan-E0FF min-h-screen flex flex-col items-center justify-center">
      <BackButton />
      <div
        style={{ border: "4px solid black" }}
        className="bg-red-FF6D w-3/4 rounded-lg p-2 flex"
      >
        <div
          style={{ border: "4px solid black" }}
          className="h-full w-full p-4 flex"
        >
          <div
            style={{ border: "4px solid black" }}
            className="w-1/2 h-full p-6"
          >
            <div className=" h-full flex flex-col justify-between">
              <div>
                <h1 className="bg-green-64B8 border rounded-xl px-4 py-2 flex items-center justify-between">
                  <span className="flex items-center">
                    <img
                      src={POKEBALL_IMAGE}
                      alt="Pokeball Image"
                      className="w-10 h-10 mr-3"
                    />{" "}
                    {name?.toUpperCase()}
                  </span>

                  <span className="text-lg">No. {infoPokemon?.id}</span>
                </h1>
                <div className="bg-green-D9D9 h-96 mt-6 border rounded-lg flex justify-center items-center">
                  <img
                    src={infoPokemon?.sprites?.front_shiny}
                    alt="FrontImage"
                    className="w-64 h-64"
                  />
                </div>
              </div>
              <TypePokemon types={infoPokemon?.types} />
            </div>
          </div>
          <div>
            <CenterBarPokedex />
          </div>
          <div
            style={{ border: "4px solid black" }}
            className="w-1/2 h-full p-6"
          >
            <div className=" h-full flex flex-col justify-between">
              <div>
                <div
                  className="bg-orange-FFA0 p-4 w-full rounded-lg flex"
                  style={{ border: "1px solid black" }}
                >
                  <div className="p-4">
                    <h4 className="text-xl font-bold">Abilities:</h4>
                    <ul>
                      {infoPokemon?.abilities.map(
                        ({ ability: { name } }: IAbility, i: number) => (
                          <li key={name}>
                            {i + 1}.- {name}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <Stats stats={infoPokemon?.stats} />
                </div>
                <div className="flex justify-around">
                  <CardImagePokemon
                    image={infoPokemon?.sprites?.front_shiny}
                    title="Front image"
                  />
                  <CardImagePokemon
                    image={infoPokemon?.sprites?.back_shiny}
                    title="Back image"
                  />
                </div>
              </div>
              <Movements moves={infoPokemon?.moves} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pokemon;
