import React from "react";
import { Link } from "react-router-dom";

import type { Repo } from "../../types/github";
import RepoStats from "../molecules/RepoStats";
import WishlistButton from "../molecules/WishlistButton";

interface Props {
  repo: Repo;
}

const RepoCard = React.memo(({ repo }: Props) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="h-10 w-10 shrink-0 rounded-full"
          />

          <Link
            to={`/detail/${repo.full_name}`}
            className="truncate text-base font-semibold text-slate-900 hover:text-blue-600"
          >
            {repo.full_name}
          </Link>
        </div>

        <WishlistButton repo={repo} />
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
        {repo.description || "No description available."}
      </p>

      <RepoStats
        stars={repo.stargazers_count}
        forks={repo.forks_count}
        language={repo.language}
      />
    </article>
  );
});

export default RepoCard;
