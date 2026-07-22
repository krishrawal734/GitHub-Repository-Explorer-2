import axiosInstance from "./axiosInstance";
import type {
  Repo,
  SearchResponse,
} from "../types/github";

export const searchRepos = async (
  query: string,
  page: number = 1
): Promise<SearchResponse> => {
  const response = await axiosInstance.get<SearchResponse>(
    "/search/repositories",
    {
      params: {
        q: query,
        page,
        per_page: 10,
      },
    }
  );

  return response.data;
};

export const getRepoDetail = async (
  fullName: string
): Promise<Repo> => {
  const response = await axiosInstance.get<Repo>(
    `/repos/${fullName}`
  );

  return response.data;
};