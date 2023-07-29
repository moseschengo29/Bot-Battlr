import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBot() {
  const { id } = useParams();
  const [selectedBot, setSelectedBot] = useState();

  useEffect(() => {
    async function fetchBot() {
      const res = await fetch("http://localhost:8000/bots");
    }
  }, []);
  return (
    <div>
      {id}id
      <Link to="/">Back</Link>
    </div>
  );
}

export default SingleBot;
