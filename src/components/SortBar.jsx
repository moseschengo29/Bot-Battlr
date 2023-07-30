import { useState } from "react";
import { useBots } from "./BotProvider";

function SortBar() {
  const [activeFilter, setActiveFilter] = useState("");
  const { filterBots } = useBots();

  function handleClick(filter) {
    setActiveFilter(filter);
    console.log(filter);
  }

  return (
    <div className="sort-bar">
      <button
        value=""
        className={`sort-btn ${activeFilter === "" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("");
          filterBots("");
        }}
      >
        <i class="fa-solid fa-robot"></i>
        <p>All</p>
      </button>

      <button
        value="Support"
        className={`sort-btn ${activeFilter === "Support" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("Support");
          filterBots("Support");
        }}
      >
        <i class="fa-solid fa-helicopter"></i>
        <p>Support</p>
      </button>

      <button
        value="Medic"
        className={`sort-btn ${activeFilter === "Medic" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("Medic");
          filterBots("Medic");
        }}
      >
        <i class="fa-solid fa-truck-medical"></i>
        <p>Medic</p>
      </button>
      <button
        value="Defender"
        className={`sort-btn ${activeFilter === "Defender" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("Defender");
          filterBots("Defender");
        }}
      >
        <i class="fa-solid fa-plane-slash"></i>
        <p>Defender</p>
      </button>
      <button
        value="Assault"
        className={`sort-btn ${activeFilter === "Assault" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("Assault");
          filterBots("Assault");
        }}
      >
        <i class="fa-solid fa-jet-fighter"></i>
        <p>Assault</p>
      </button>
      <button
        value="Witch"
        className={`sort-btn ${activeFilter === "Witch" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("Witch");
          filterBots("Witch");
        }}
      >
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <p>Witch</p>
      </button>
      <button
        value="Captain"
        className={`sort-btn ${activeFilter === "Captain" ? "active" : ""}`}
        onClick={(e) => {
          handleClick("Captain");
          filterBots("Captain");
        }}
      >
        <i class="fa-solid fa-user-nurse"></i>
        <p>Captain</p>
      </button>
    </div>
  );
}

export default SortBar;
