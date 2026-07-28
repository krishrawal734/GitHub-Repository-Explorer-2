import SearchBar from "../molecules/SearchBar";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const SearchSection = ({ value, onChange, onClear }: Props) => {
  return (
    <div className="mb-6">
      <SearchBar value={value} onChange={onChange} onClear={onClear} />

      <p className="mt-2 text-sm text-slate-500">
        Type at least 2 characters. Results update automatically.
      </p>
    </div>
  );
};

export default SearchSection;
