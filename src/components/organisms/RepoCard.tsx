import React from "react";
import type { Repo } from "../../types/github";
import RepoStats from "../molecules/RepoStats";

interface Props {
  repo: Repo;
}

const RepoCard = React.memo(({ repo }: Props) => {
  return (
    <div
      className="
      rounded-xl
      bg-white
      p-5
      shadow-md
      hover:shadow-xl
      transition-all
      "
    >
      <div className="flex gap-4">
        <img
          src={repo.owner.avatar_url}
          alt={repo.name}
          className="h-16 w-16 rounded-full"
        />

        <div>
          <h2 className="text-xl font-bold">{repo.name}</h2>

          <p className="text-gray-600">{repo.owner.login}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700">
        {repo.description || "No description available."}
      </p>

      <RepoStats
        stars={repo.stargazers_count}
        forks={repo.forks_count}
        language={repo.language}
      />
    </div>
  );
});

export default RepoCard;