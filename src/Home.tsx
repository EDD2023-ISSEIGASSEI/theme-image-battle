import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      hello world
      <a href="/sample">いいい</a>
      <Link to="/sample">ああああ</Link>
    </div>
  );
}

export default Home;
