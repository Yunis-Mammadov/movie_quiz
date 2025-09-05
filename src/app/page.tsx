import Link from "next/link";
import { games } from "./data/games"; 

export default function HomePage() {
  return (
    <div className="home-container">
      <p className="">Select the game you want to play:</p>
      <div className="home-links">
        {games.map((game) => (
          <Link key={game.id} href={`/quiz/${game.id}`}>
            <div className="card">
              <img
                src="https://futbol-11.com/media/thumbnail/legacy.webp"
                alt=""
              />
              <div className="card-info">
                <p>PLAY</p>
                <p>{game.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
