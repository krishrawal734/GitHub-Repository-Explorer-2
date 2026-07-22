import Badge from "../atoms/Badge";
import StarIcon from "../atoms/StarIcon";

interface Props {
  stars: number;
  forks: number;
  language: string;
}

const RepoStats = ({ stars, forks, language }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 mt-3">
      <div className="flex items-center gap-1">
        <StarIcon />
        <span>{stars}</span>
      </div>

      <Badge text={`Forks : ${forks}`} />

      <Badge text={language || "Unknown"} />
    </div>
  );
};

export default RepoStats;
