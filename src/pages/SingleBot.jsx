import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBots } from "../components/BotProvider";

import health from "../assests/001-cardiogram.png";
import shield from "../assests/002-shield.png";
import damage from "../assests/003-damage.png";
function formatDateTime(dateTimeString) {
  const dateObj = new Date(dateTimeString);

  const optionsDate = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", optionsDate);

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const formattedTime = dateObj.toLocaleTimeString("en-US", optionsTime);

  return `${formattedDate} ${formattedTime}`;
}

function SingleBot() {
  const { id } = useParams();

  const [selectedBot, setSelectedBot] = useState({});

  const { addBotToArmy } = useBots();

  useEffect(() => {
    async function fetchBot() {
      const res = await fetch(`http://localhost:8000/bots/${id}`);
      const data = await res.json();
      setSelectedBot(data);
    }
    fetchBot();
  }, [id]);

  return (
    <>
      <h1 className="bot-card-title">Bot Details</h1>
      <div className="bot-card">
        <img
          src={selectedBot.avatar_url}
          alt={`${selectedBot.name} Poster`}
          className="bot-card-image"
        />
        <div className="bot-details">
          <h1>Name: {selectedBot.name}</h1>
          <p>
            <strong>Catchphrase:</strong>{" "}
            <span className="catchphrase">{selectedBot.catchphrase}</span>
          </p>
          <p>
            <strong>Bot Class: </strong>{" "}
            <span className="bot-class">{selectedBot.bot_class}</span>
          </p>

          <div>
            <ul className="bot-card-attributes">
              <li className="bot-card-attribute">
                <img src={health} alt="icon" />{" "}
                <span>{selectedBot.health}</span>
              </li>
              <li className="bot-card-attribute">
                <img src={damage} alt="icon" />
                <span>{selectedBot.damage}</span>
              </li>
              <li className="bot-card-attribute">
                <img src={shield} alt="icon" />
                <span>{selectedBot.armor}</span>
              </li>
            </ul>
          </div>

          <p>Created on: {formatDateTime(selectedBot.created_at)}</p>
          <p>Updated on: {formatDateTime(selectedBot.updated_at)}</p>

          <div className="buttons">
            <Link to="/">
              <button className="btn back">Back &larr;</button>
            </Link>
            <button
              className="btn add"
              onClick={() => addBotToArmy(selectedBot)}
            >
              Add to army
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBot;
