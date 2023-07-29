import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <h1>
          🤖 Bot <span className="tag">Battlr</span>
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
