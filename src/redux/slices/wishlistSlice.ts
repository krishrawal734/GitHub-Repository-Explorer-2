import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type {
  Repo,
  WishlistState,
} from "../../types/github";

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishlist: (
      state,
      action: PayloadAction<Repo>
    ) => {
      const exists = state.items.find(
        (repo) =>
          repo.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter(
        (repo) =>
          repo.id !== action.payload
      );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;