import { useBots } from "./BotProvider";
import SortBar from "./SortBar";

function Sort() {
  const { handleSort, bots } = useBots();
  return (
    <div className="details">
      <form className="sort">
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="health">Sort by Health</option>
          <option value="armor">Sort by Armor</option>
          <option value="damage">Sort by Damage</option>
        </select>
      </form>

      <SortBar />

      <p className="results">
        Showing <strong>{bots.length}</strong> results
      </p>
    </div>
  );
}

export default Sort;
