import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeTemplate from "../templates/HomeTemplate";
import RepoList from "../organisms/RepoList";
import type { RootState } from "../../redux/store";

const WishlistPage = () => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.items,
  );

  return (
    <HomeTemplate
      backLink={{ to: "/", label: "← Back to search" }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Your Wishlist</h2>
        <p className="mt-1 text-sm text-slate-500">
          {wishlistItems.length}{" "}
          {wishlistItems.length === 1 ? "repository" : "repositories"} saved
        </p>
      </div>

      {wishlistItems.length > 0 ? (
        <RepoList repos={wishlistItems} />
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-base text-slate-400">
            Your wishlist is empty.
          </p>
          <Link
            to="/"
            className="mt-4 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Search repositories →
          </Link>
        </div>
      )}
    </HomeTemplate>
  );
};

export default WishlistPage;
