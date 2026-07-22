import RepoCard from "./RepoCard";
import type { Repo } from "../../types/github";

interface Props {
  repos: Repo[];
}

const RepoList = ({ repos }: Props) => {
  return (
    <div className="grid gap-5">

      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}

    </div>
  );
};

export default RepoList;