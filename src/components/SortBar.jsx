import { useBots } from "./BotProvider";

function SortBar() {
  const { filterBots } = useBots();

  return (
    <div className="sort-bar">
      <button value="" className="sort-btn" onClick={(e) => filterBots("")}>
        <i class="fa-solid fa-helicopter"></i>
        <p>All</p>
      </button>

      <button
        value="Support"
        className="sort-btn"
        onClick={(e) => filterBots("Support")}
      >
        <i class="fa-solid fa-helicopter"></i>
        <p>Support</p>
      </button>

      <button
        value="Medic"
        className="sort-btn"
        onClick={(e) => filterBots("Medic")}
      >
        <i class="fa-solid fa-truck-medical"></i>
        <p>Medic</p>
      </button>
      <button
        value="Defender"
        className="sort-btn"
        onClick={(e) => filterBots("Defender")}
      >
        <i class="fa-solid fa-plane-slash"></i>
        <p>Defender</p>
      </button>
      <button
        value="Assault"
        className="sort-btn"
        onClick={(e) => filterBots("Assault")}
      >
        <i class="fa-solid fa-jet-fighter"></i>
        <p>Assault</p>
      </button>
      <button
        value="Witch"
        className="sort-btn"
        onClick={(e) => filterBots("Witch")}
      >
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <p>Witch</p>
      </button>
      <button
        value="Captain"
        className="sort-btn"
        onClick={(e) => filterBots("Captain")}
      >
        <i class="fa-solid fa-robot"></i>
        <p>Captain</p>
      </button>
    </div>
  );
}

export default SortBar;
