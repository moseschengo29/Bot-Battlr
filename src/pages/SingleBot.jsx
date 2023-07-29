import { Link, useParams } from "react-router-dom";

function SingleBot() {
  const { id } = useParams();
  return (
    <div>
      {id}id
      <Link to="/">Back</Link>
    </div>
  );
}

export default SingleBot;
