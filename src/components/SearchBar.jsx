import { useBots } from "./BotProvider";

function SearchBar() {
  const { query, setQuery } = useBots();

  return (
    <form>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="search"
        placeholder="Search for a bot..."
      />
    </form>
  );
}

export default SearchBar;
