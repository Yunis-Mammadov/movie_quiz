import Link from "next/link";
import { tomorrow } from "@/lib/fonts/fonts"

export default function ImpostorRules() {
    return (
        <div className="rules-container">
            <h1 className={tomorrow.className} style={{textAlign:"center"}}>
                <span style={{ color: "#f2b705" }}>Impo</span>
                <span style={{ color: "#0dd0f7" }}>stor</span>
            </h1>
            <div className="rules-content">
                <div className="rules-image">
                    <img
                        src="https://futbol-11.com/media/thumbnail/legacy.webp"
                        alt="mystery player"
                    />
                </div>

                <div className="rules-text">
                    <p>
                        Futbol Legacy challenges you to identify the mystery player (active
                        or retired) based on the four clubs he’s played for.
                    </p>

                    <p>
                        The rules begins by revealing one club. You can either make a guess
                        or skip to see the next club. Guess correctly at any point, and you
                        win!
                    </p>

                    <p>
                        Once all four clubs are revealed, you’ll have one final chance to
                        name the player.
                    </p>

                    <Link href="/quiz/impostor">
                        <button className="start-btn">Start Game</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
