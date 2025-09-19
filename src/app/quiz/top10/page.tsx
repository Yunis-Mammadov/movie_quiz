// import { tomorrow } from "@/lib/fonts/fonts";



// export default function Top10() {
//   return (
//     <div className="top10-container">
//       <div>
//         <p className="top10-title">ƏN SON OSCAR QAZANMIŞ 10 AKTYOR</p>
//       </div>
//       <div className="top10-section">
//         <div>
//           <button className="top10-number">1</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">2</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">3</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">4</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">5</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">6</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">7</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">8</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">9</button>
//           <button className="top10-content">content</button>
//         </div>
//         <div>
//           <button className="top10-number">10</button>
//           <button className="top10-content">content</button>
//         </div>
//       </div>
//       <div className="top10-input">
//         {/* {!answered ? ( */}
//         <>
//           <input
//             className={tomorrow.className}
//             type="text"
//             // value={inputValue}
//             // onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Type actor name..."
//             // onKeyDown={(e) => {
//             //   if (e.key === "Enter") checkAnswer();
//             // }}
//           />
//           <div className="buttons">
//             {/* <button onClick={checkAnswer}>Check</button> */}
//             <button>check</button>
//           </div>
//         </>
//         {/* ) : (
//         <div className="main-menu-link">
//           <a href="/" className="button-link">
//             Go to Main Menu
//           </a>
//         </div>
//         )} */}
//       </div>
//     </div>
//   )
// }

import React from 'react';
import styles from '../../../styles/top10.module.scss';

interface Player {
  rank: number;
  flag: string; // emoji və ya image yolu
  name?: string;
}

const players: Player[] = [
  { rank: 1, flag: '🇪🇸', name: 'Lamine Yamal' },
  { rank: 2, flag: '🏴' },
  { rank: 3, flag: '🇩🇪' },
  { rank: 4, flag: '🇩🇪' },
  { rank: 5, flag: '🇧🇷' },
  { rank: 6, flag: '🇪🇸' },
  { rank: 7, flag: '🇹🇷' },
  { rank: 8, flag: '🇪🇸' },
  { rank: 9, flag: '🇪🇸', name: 'Pedri' },
  { rank: 10, flag: '🇫🇷' },
];

const Top10 = () => {
  return (
    <div className={styles.leaderboard}>
      {players.map((player) => (
        <div
          key={player.rank}
          className={`${styles.player} ${player.rank === 1 || player.rank === 9 ? styles.highlight : ''
            }`}
        >
          <span className={styles.rank}>{player.rank}.</span>
          <span className={styles.flag}>{player.flag}</span>
          {player.name && <span className={styles.name}>{player.name}</span>}
        </div>
      ))}
    </div>
  );
};

export default Top10;
