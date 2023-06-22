import { Dispatch } from "redux";
import { getSinglePokemon } from "../services/singlePokemonService";
import { setCurrentPokemon, setLoading } from "../slices/pokemonsSlice";

export const getSinglePokemonInfo = (name: string) => async (dispatch: Dispatch) => {

    try {
        dispatch(setLoading(true))
        const response = await getSinglePokemon(name)
        dispatch(setCurrentPokemon(response.data))
    } catch (error: any) {
        console.log(error)
    } finally {
        dispatch(setLoading(false))
    }
};
