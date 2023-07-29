import SelectedBot from "./SelectedBot";
import { useBots } from "./BotProvider";

function YourBotArmy() {
  const { botArmy } = useBots();

  return (
    <div className="header">
      {botArmy.length > 0 ? (
        <h1>Your Bot Army</h1>
      ) : (
        <h1>Add Bots To Your Army!</h1>
      )}
      <ul className="bot-army">
        {botArmy.map((bot) => (
          <SelectedBot bot={bot} key={bot.id} />
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
