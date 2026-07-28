import { FiGitBranch, FiStar } from "react-icons/fi";

import Badge from "../atoms/Badge";

interface Props {
  stars: number;
  forks: number;
  language: string;
}

const formatCount = (count: number) => count.toLocaleString();

const RepoStats = ({ stars, forks, language }: Props) => {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
      <div className="flex items-center gap-1.5">
        <FiStar className="h-4 w-4" />
        <span>{formatCount(stars)}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <FiGitBranch className="h-4 w-4" />
        <span>{formatCount(forks)}</span>
      </div>

      {language && <Badge text={language} />}
    </div>
  );
};

export default RepoStats;
