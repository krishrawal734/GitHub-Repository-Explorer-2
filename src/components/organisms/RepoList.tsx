import RepoCard from "./RepoCard";
import type { Repo } from "../../types/github";

interface Props {
  repos: Repo[];
}

const RepoList = ({ repos }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
