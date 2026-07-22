export interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

export interface SearchResponse {
  total_count: number;
  items: Repo[];
}

export interface RepoState {
  items: Repo[];
  selectedRepo: Repo | null;
  loading: boolean;
  error: string | null;
  page: number;
  totalCount: number;
}

export interface WishlistState {
  items: Repo[];
}