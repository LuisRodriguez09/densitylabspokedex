import { AxiosResponse } from "axios";
import { IPokemonResponse } from "../types/pokemons-responss";
import axios from "../config/axios";

export const getSinglePokemon = async (
    name: string
): Promise<AxiosResponse<IPokemonResponse>> => {
    const config = {
        url: `/${name}`,
        method: "GET",
    };

    return await axios(config);
};