import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from '../slices/pokemonsSlice'
// To add a reducer import reducer from slices/typeslice

export const store = configureStore({
    devTools: true,
    reducer: {
        pokemons: pokemonsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch