import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../redux/store";

import { getRepoDetail } from "../../redux/slices/repoSlice";

import Spinner from "../atoms/Spinner";
import DetailTemplate from "../templates/DetailTemplate";

const DetailPage = () => {
  const { fullName } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { selectedRepo, loading, error } = useSelector(
    (state: RootState) => state.repo,
  );

  useEffect(() => {
    if (fullName) {
      dispatch(getRepoDetail(fullName));
    }
  }, [dispatch, fullName]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <DetailTemplate>
      {selectedRepo && (
        <div className="rounded-xl bg-white p-6 shadow-md">
          <img
            src={selectedRepo.owner.avatar_url}
            alt={selectedRepo.name}
            className="mb-5 h-24 w-24 rounded-full"
          />

          <h1 className="text-3xl font-bold">{selectedRepo.name}</h1>

          <p className="mt-3">{selectedRepo.description}</p>

          <div className="mt-5 space-y-2">
            <p>Stars : {selectedRepo.stargazers_count}</p>

            <p>Forks : {selectedRepo.forks_count}</p>

            <p>Language : {selectedRepo.language}</p>
          </div>
        </div>
      )}
    </DetailTemplate>
  );
};

export default DetailPage;
