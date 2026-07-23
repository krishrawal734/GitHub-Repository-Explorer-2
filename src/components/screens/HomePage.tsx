import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeTemplate from "../templates/HomeTemplate";
import SearchSection from "../organisms/SearchSection";
import RepoList from "../organisms/RepoList";
import Spinner from "../atoms/Spinner";

import useDebounce from "../../hooks/useDebounce";

import { searchRepos } from "../../redux/slices/repoSlice";

import type { AppDispatch, RootState } from "../../redux/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error } = useSelector(
    (state: RootState) => state.repo,
  );

  const [search, setSearch] = useState("");

  const debouncedValue = useDebounce(search);

  useEffect(() => {


    
    if (debouncedValue.trim()) {
      dispatch(
        searchRepos({
          query: debouncedValue,
        }),
      );
    }
  }, [debouncedValue, dispatch]);

  return (
    <HomeTemplate>
      <SearchSection
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!search && <p>Start searching repositories.</p>}

      {loading && <Spinner />}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && items.length > 0 && <RepoList repos={items} />}

      {!loading && search && items.length === 0 && (
        <p>No repositories found.</p>
      )}
    </HomeTemplate>
  );
};

export default HomePage;