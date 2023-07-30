import { useBots } from "./BotProvider";

function SearchBar() {
  const { query, setQuery } = useBots();

  return (
    <form className="search">
      <input
        value={query}
        onChange={(e) => {
          e.preventDefault();
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Search for a bot..."
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </form>
  );
}

export default SearchBar;
