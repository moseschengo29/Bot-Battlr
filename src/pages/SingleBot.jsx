import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBot() {
  const { id } = useParams();
  const [selectedBot, setSelectedBot] = useState({});

  useEffect(() => {
    async function fetchBot() {
      const res = await fetch(`http://localhost:8000/bots/${id}`);
      const data = await res.json();
      setSelectedBot(data);
      console.log(data);
    }
    fetchBot();
  }, []);
  return (
    <div>
      <img src={selectedBot.avatar_url} alt="" />
      <h1>{selectedBot.name}</h1>
      <Link to="/">BACKKK</Link>
    </div>
  );
}

export default SingleBot;
