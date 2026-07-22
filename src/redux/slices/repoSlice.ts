import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RepoState } from "../../types/github";
import {
  searchRepos as searchRepositories,
  getRepoDetail as getRepositoryDetail,
} from "../../api/github";

export const searchRepos = createAsyncThunk(
  "repo/searchRepos",
  async (
    {
      query,
      page,
    }: {
      query: string;
      page?: number;
    },
    { rejectWithValue },
  ) => {
    try {
      const data = await searchRepositories(query, page);

      return data;
    } catch (error: unknown) {
      return rejectWithValue(
        (error as { response?: { data?: { message?: string } } }).response?.data?.message || "Failed to fetch repositories.",
      );
    }
  },
);

export const getRepoDetail = createAsyncThunk(
  "repo/getRepoDetail",
  async (fullName: string, { rejectWithValue }) => {
    try {
      const data = await getRepositoryDetail(fullName);

      return data;
    } catch (error: unknown) {
      return rejectWithValue(
        (error as { response?: { data?: { message?: string } } }).response?.data?.message || "Failed to fetch repository details.",
      );
    }
  },
);

const initialState: RepoState = {
  items: [],
  selectedRepo: null,
  loading: false,
  error: null,
  page: 1,
  totalCount: 0,
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Search Repositories

      .addCase(searchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(searchRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalCount = action.payload.total_count;
      })

      .addCase(searchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong.";
      })

      // Repository Detail

      .addCase(getRepoDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getRepoDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRepo = action.payload;
      })

      .addCase(getRepoDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong.";
      });
  },
});

export default repoSlice.reducer;
