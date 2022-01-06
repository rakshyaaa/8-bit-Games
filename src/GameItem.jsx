import { useState } from "react";
import Overlay from "./Overlay";

export default function GameItem({ game, category }) {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className="gameItem"
      style={{
        display: game.category.includes(category) ? "block" : "none",
      }}
    >
      <img
        className="gameItemImage"
        {...game.image}
        onClick={() => setOverlay(true)}
      />
      <p className="playText">Play</p>
      <p>{game.title}</p>
      <Overlay
        overlay={overlay}
        setOverlay={setOverlay}
        title={game.title}
        image={game.image}
        category={game.category}
        releaseDate={game.releaseDate}
        developer={game.developer}
        numOfplayers={game.numOfplayers}
      />
    </div>
  );
}
