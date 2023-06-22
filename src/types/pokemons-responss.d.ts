export interface IPokemon {
    name: string;
    url: string
}

export interface IPokemonResponse {
    sprites: {
        font_shiny: string;
    }
}

export interface IAbilities {
    ability: string;
}

export interface IStats {
    base_stat: number;
    stat: {
        name: string
    }
}

export interface ITypes {
    type: {
        name: string
    }
}

export interface IMoves {
    move: {
        name: string
    }
}