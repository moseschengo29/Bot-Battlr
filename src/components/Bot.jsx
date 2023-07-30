import { Link } from "react-router-dom";
import { useBots } from "./BotProvider";

function Bot({ bot }) {
  const { deleteBot } = useBots();

  const {
    id,
    name,
    health,
    armor,
    damage,
    bot_class,
    catchphrase,
    avatar_url,
  } = bot;

  let icon;
  if (bot_class === "Support") icon = <i class="fa-solid fa-helicopter"></i>;
  if (bot_class === "Medic") icon = <i class="fa-solid fa-truck-medical"></i>;
  if (bot_class === "Defender") icon = <i class="fa-solid fa-plane-slash"></i>;

  if (bot_class === "Assault") icon = <i class="fa-solid fa-jet-fighter"></i>;
  if (bot_class === "Witch")
    icon = <i class="fa-solid fa-wand-magic-sparkles"></i>;
  if (bot_class === "Captain") icon = <i class="fa-solid fa-user-nurse"></i>;

  return (
    <div className="bot">
      <i class="fa-solid fa-xmark delete" onClick={() => deleteBot(bot)}></i>

      <Link to={`bot/${id}`}>
        <img src={avatar_url} alt="" className="bot-img" />

        <div className="bot-body">
          <header className="bot-header">
            <h2 className="bot-name">{name}</h2>
            <span>{icon}</span>
          </header>
          <div className="btn-body">
            <p className="bot-name">{catchphrase}</p>
          </div>
          <footer>
            <ul className="bot-attributes">
              <li className="bot-attribute">
                <i class="fa-solid fa-heart-pulse"></i>
                <p>{health}</p>
              </li>
              <li className="bot-attribute">
                <i class="fa-solid fa-bolt"></i>
                <p>{damage}</p>
              </li>
              <li className="bot-attribute">
                <i class="fa-solid fa-shield-halved"></i>
                <p>{armor}</p>
              </li>
            </ul>
          </footer>
        </div>
      </Link>
    </div>
  );
}

export default Bot;
