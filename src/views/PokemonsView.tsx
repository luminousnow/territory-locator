import { FC, useEffect, useState } from "react";
import { api } from "../api";
import { PokemonResult } from "../api/entities/pokemon";

export const PokemonsView: FC = () => {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const pokemonsResponse = await api.getPokemon();
        setPokemons(pokemonsResponse.data.results);
      } catch (error) {
        throw new Error("oops");
      }
    })();
  }, []);

  return (
    <ul>
      {pokemons.length &&
        pokemons.map((pokemon: PokemonResult, index: number) => (
          <li key={index}>{pokemon.name}</li>
        ))}
    </ul>
  );
};
