import Bot from "./Bot";
import Spinner from "./Spinner";
import { useBots } from "./BotProvider";

function BotCollection() {
  const { isLoading, bots } = useBots();

  if (isLoading) return <Spinner />;

  return (
    <ul className="bot-collection">
      {bots.map((bot) => (
        <Bot bot={bot} key={bot.id} />
      ))}
    </ul>
  );
}

export default BotCollection;
