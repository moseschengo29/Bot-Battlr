import { createContext, useContext, useEffect, useState } from "react";

const BotContext = createContext();

function BotProvider({ children }) {
  const [bots, setBots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedBots, setSortedBots] = useState([]);
  const [botArmy, seBotArmy] = useState([]);
  const [query, setQuery] = useState("");

  function handleSort(sortBy) {
    if (sortBy === "health") {
      const sortedByDescription = [...sortedBots].sort(
        (a, b) => b.health - a.health
      );
      setSortedBots(sortedByDescription);
    }
    if (sortBy === "armor") {
      const sortedByDescription = [...sortedBots].sort(
        (a, b) => b.armor - a.armor
      );
      setSortedBots(sortedByDescription);
    }
    if (sortBy === "damage") {
      const sortedByDescription = [...sortedBots].sort(
        (a, b) => b.damage - a.damage
      );
      setSortedBots(sortedByDescription);
    }
  }

  function addBotToArmy(bot) {
    if (botArmy.length !== 4 && !botArmy.includes(bot))
      seBotArmy((bots) => [bot, ...bots]);
  }

  function removeBotFromArmy(bot) {
    seBotArmy((bots) => bots.filter((b) => b.id !== bot.id));
  }

  useEffect(() => {
    const filteredBots = sortedBots.filter((bot) =>
      bot.name.toLowerCase().includes(query.toLowerCase())
    );

    setSortedBots(filteredBots);
  }, [query]);

  useEffect(() => {
    async function fetchBots() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/bots");
        const data = await res.json();
        setBots(data);
        setSortedBots(data);
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
        bots: sortedBots,
        isLoading,
        addBotToArmy,
        handleSort,
        botArmy,
        removeBotFromArmy,
        query,
        setQuery,
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
