import axios from "../axios";
import { AxiosResponse } from "axios";

// interface for MAPping
export interface CatFactResponseModel {
  fact: string;
  length: number;
}

// interface for response data
export interface ResponseModel {
  current_page: number;
  data: CatFactResponseModel[];
}

export const getCatFacktData = async (): Promise<
  AxiosResponse<ResponseModel>
> => {
  const result = await axios.get<ResponseModel>("https://catfact.ninja/facts", {
    params: { limit: 20 },
  });

  return result;
};
