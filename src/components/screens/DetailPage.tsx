import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../redux/store";

import { getRepoDetail } from "../../redux/slices/repoSlice";

import Spinner from "../atoms/Spinner";
import DetailTemplate from "../templates/DetailTemplate";
import RepoStats from "../molecules/RepoStats";
import WishlistButton from "../molecules/WishlistButton";

const DetailPage = () => {
  const { owner, repo } = useParams();
  const fullName = owner && repo ? `${owner}/${repo}` : "";

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
    return (
      <DetailTemplate>
        <Spinner />
      </DetailTemplate>
    );
  }

  if (error) {
    return (
      <DetailTemplate>
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      </DetailTemplate>
    );
  }

  return (
    <DetailTemplate>
      {selectedRepo && (
        <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src={selectedRepo.owner.avatar_url}
              alt={selectedRepo.owner.login}
              className="h-14 w-14 shrink-0 rounded-full"
            />

            <h1 className="text-xl font-bold text-slate-900">
              {selectedRepo.full_name}
            </h1>
          </div>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {selectedRepo.description || "No description available."}
          </p>

          <RepoStats
            stars={selectedRepo.stargazers_count}
            forks={selectedRepo.forks_count}
            language={selectedRepo.language}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={selectedRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Open on GitHub
              <FiExternalLink className="h-4 w-4 text-blue-600" />
            </a>

            <WishlistButton repo={selectedRepo} variant="detail" />
          </div>
        </article>
      )}
    </DetailTemplate>
  );
};

export default DetailPage;
