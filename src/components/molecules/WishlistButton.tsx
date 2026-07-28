import React from "react";
import { FiStar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import type { Repo } from "../../types/github";
import type { AppDispatch, RootState } from "../../redux/store";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slices/wishlistSlice";

interface Props {
  repo: Repo;
  variant?: "card" | "detail";
}

const WishlistButton = ({ repo, variant = "card" }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const isWishlisted = useSelector((state: RootState) =>
    state.wishlist.items.some((item) => item.id === repo.id),
  );

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (  isWishlisted) {
      dispatch(removeFromWishlist(repo.id));
    } else {
      dispatch(addToWishlist(repo));
    }
  };

  if (variant === "detail") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition ${
          isWishlisted
            ? "border-amber-300 bg-amber-50 text-amber-700"
            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
        }`}
      >
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
        isWishlisted
          ? "border-amber-300 bg-amber-50 text-amber-700"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <FiStar
        className={`h-4 w-4 ${isWishlisted ? "fill-amber-500 text-amber-500" : ""}`}
      />
      {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
