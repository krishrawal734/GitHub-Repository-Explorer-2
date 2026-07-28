import { FiX } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const SearchBar = ({ value, onChange, onClear }: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search GitHub repositories..."
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 pr-10 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-slate-100"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <FiX className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
