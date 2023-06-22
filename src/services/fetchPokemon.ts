export const fetchPokemon = async (service: string) => {
    const response = await fetch(service)

    return response

}