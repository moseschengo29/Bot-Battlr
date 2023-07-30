import { createContext, useContext, useEffect, useState } from "react";

const BotContext = createContext();

function BotProvider({ children }) {
  const [bots, setBots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedBots, setSortedBots] = useState([]);
  const [allBots, setAllBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredBots, setFilteredBots] = useState([]);
  const [filterMethod, setFilterMethod] = useState("");

  function handleSort(sortBy) {
    if (sortBy === "health") {
      const sortedByDescription = [...allBots].sort(
        (a, b) => b.health - a.health
      );
      setFilteredBots(sortedByDescription);
    }
    if (sortBy === "armor") {
      const sortedByDescription = [...allBots].sort(
        (a, b) => b.armor - a.armor
      );
      setFilteredBots(sortedByDescription);
    }
    if (sortBy === "damage") {
      const sortedByDescription = [...allBots].sort(
        (a, b) => b.damage - a.damage
      );
      setFilteredBots(sortedByDescription);
    }
  }

  function addBotToArmy(bot) {
    if (botArmy.length !== 4 && !botArmy.includes(bot))
      setBotArmy((bots) => [bot, ...bots]);
  }

  function removeBotFromArmy(bot) {
    setBotArmy((bots) => bots.filter((b) => b.id !== bot.id));
  }

  function removeBotFromCollection(bot) {
    setFilteredBots((bots) => bots.filter((b) => b.id !== bot.id));
  }

  function deleteBot(bot) {
    const confirm = window.confirm(
      "Are you sure you want to delete a bot permanently?"
    );

    if (confirm) {
      fetch(`http://localhost:8000/bots/${bot.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => removeBotFromCollection(bot));
    }
  }

  function filterBots(botClass) {
    setFilterMethod(botClass);
  }

  useEffect(() => {
    let bots;
    if (filterMethod === "") {
      bots = allBots;
    } else {
      bots = allBots.filter((bot) => bot.bot_class === filterMethod);
    }
    setFilteredBots(bots);
  }, [filterMethod, sortedBots]);

  useEffect(() => {
    let filteredBots = [...sortedBots]; // Make a copy of the sortedBots array

    if (query !== "") {
      filteredBots = filteredBots.filter((bot) =>
        bot.name.toLowerCase().includes(query.toLowerCase())
      );
    } else filteredBots = [...bots];
    setFilteredBots(filteredBots);
  }, [query, sortedBots]);

  useEffect(() => {
    async function fetchBots() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/bots");
        const data = await res.json();
        setBots(data);
        setSortedBots(data);
        setAllBots(data);
      } catch (err) {
        alert("Error fetching bots");
      } finally {
        setIsLoading(false);
      }
    }
    fetchBots();
  }, []);

  return (
    <BotContext.Provider
      value={{
        bots: filteredBots,
        isLoading,
        deleteBot,
        addBotToArmy,
        handleSort,
        botArmy,
        removeBotFromArmy,
        query,
        setQuery,
        filterBots,
      }}
    >
      {children}
    </BotContext.Provider>
  );
}

function useBots() {
  const context = useContext(BotContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { BotProvider, useBots };
