interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search Github Repositories..."
      className="
      w-full
      rounded-lg
      border
      p-3
      outline-none
      shadow-sm
      "
    />
  );
};

export default SearchBar;