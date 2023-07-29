import Bot from "./Bot";
import Spinner from "./Spinner";
import { useBots } from "./BotProvider";

function BotCollection() {
  const { isLoading, bots } = useBots();

  if (isLoading) return <Spinner />;

  if (bots.length === 0) return <h1>No Bots Related to your search!</h1>;

  return (
    <ul className="bot-collection">
      {bots.map((bot) => (
        <Bot bot={bot} key={bot.id} />
      ))}
    </ul>
  );
}

export default BotCollection;
