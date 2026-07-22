import SearchBar from "../molecules/SearchBar";

interface Props {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const SearchSection = ({
  value,
  onChange,
}: Props) => {
  return (
    <div className="mb-8">
      <SearchBar
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchSection;