import { createSlice } from "@reduxjs/toolkit";

export interface IInitialStatePokemon {
    isLoading: boolean,
    currentPokemon: {
        sprites: {
            front_shiny: string | undefined
        }
        name: string | undefined;
    }
}

const initialState: IInitialStatePokemon = {
    isLoading: false,
    currentPokemon: {
        sprites: { front_shiny: undefined },
        name: undefined
    }
};

export const pokemonsSlice = createSlice({
    name: "pokemonsSlice",
    initialState,
    reducers: {
        setCurrentPokemon: (state, action) => ({
            ...state,
            currentPokemon: action.payload,
        }),
        setLoading: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
    },
});

export const {
    setCurrentPokemon,
    setLoading
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
