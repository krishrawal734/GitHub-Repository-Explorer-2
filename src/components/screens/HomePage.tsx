import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeTemplate from "../templates/HomeTemplate";
import SearchSection from "../organisms/SearchSection";
import RepoList from "../organisms/RepoList";
import Spinner from "../atoms/Spinner";
import Pagination from "../molecules/Pagination";

import useDebounce from "../../hooks/useDebounce";

import { searchRepos } from "../../redux/slices/repoSlice";

import type { AppDispatch, RootState } from "../../redux/store";

const MIN_SEARCH_LENGTH = 2;
const RESULTS_PER_PAGE = 10;

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error, totalCount } = useSelector(
    (state: RootState) => state.repo,
  );

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedValue = useDebounce(search);
  const trimmedSearch = debouncedValue.trim();
  const canSearch = trimmedSearch.length >= MIN_SEARCH_LENGTH;
  const totalPages = Math.min(
    Math.ceil(totalCount / RESULTS_PER_PAGE),
    100,
  );

  useEffect(() => {
    setPage(1);
  }, [trimmedSearch]);

  useEffect(() => {
    if (canSearch) {
      dispatch(
        searchRepos({
          query: trimmedSearch,
          page,
        }),
      );
    }
  }, [canSearch, trimmedSearch, page, dispatch]);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showEmptyPrompt = !search.trim();
  const showShortQueryHint =
    search.trim().length > 0 && search.trim().length < MIN_SEARCH_LENGTH;
  const showResults = canSearch && !loading && items.length > 0;
  const showNoResults = canSearch && !loading && items.length === 0 && !error;

  return (
    <HomeTemplate>
      <SearchSection
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClear={() => setSearch("")}
      />

      {showEmptyPrompt && (
        <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-base text-slate-400">
            Start typing to search GitHub repositories.
          </p>
        </div>
      )}

      {showShortQueryHint && (
        <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-base text-slate-400">
            Enter at least {MIN_SEARCH_LENGTH} characters to search.
          </p>
        </div>
      )}

      {canSearch && loading && <Spinner />}

      {canSearch && error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {showResults && (
        <>
          <p className="mb-4 text-sm text-slate-500">
            {totalCount.toLocaleString()} results
          </p>
          <RepoList repos={items} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {showNoResults && (
        <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-base text-slate-400">No repositories found.</p>
        </div>
      )}
    </HomeTemplate>
  );
};

export default HomePage;
