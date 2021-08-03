import axios from "../axios";
import { AxiosResponse } from "axios";

export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonResponseModel {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

export const getPokemon = async (): Promise<
  AxiosResponse<PokemonResponseModel>
> => {
  const res = await axios.get<PokemonResponseModel>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      params: {
        limit: 10,
        offset: 20,
      },
    }
  );

  return res;
  // return res?.data;
};
