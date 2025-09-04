import Link from "next/link";

const games = [
  { id: "whobox", title: "Who is in the Box?" },
  { id: "impostor", title: "Impostor" },
  { id: "pyramid", title: "Pyramid" },
  { id: "connections", title: "Connections" },
  { id: "link", title: "Link" },
  { id: "bingo", title: "Bingo" },
  { id: "top10", title: "Top10" },
  { id: "worldle", title: "Worldle" },
];

export default function HomePage() {
  return (
    <div className="home-container">
      <p className="">Select the game you want to play:</p>
      <div className="home-links">
        {games.map((game) => (
          <Link href={`/quiz/${game.id}`}>
            <div className="card">
              
                <img src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />

              <div className="card-info">
                <p>
                  PLAY
                </p>
                <p>
                  {game.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
