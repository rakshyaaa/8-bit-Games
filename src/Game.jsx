import { useState } from "react";
import GameItem from "./GameItem";

export default function Game({ gameSectionText, gameCategories, games }) {
  const [category, setCategory] = useState("All Games");

  return (
    <div className="games" id="game">
      <div className="gameText">
        <h1>{gameSectionText}</h1>
      </div>
      <div className="categories">
        {gameCategories.map((gameCategory, index) => {
          console.log(gameCategory);
          return (
            <button
              className="categoriesItem"
              onClick={() => setCategory(gameCategory)}
              style={{
                backgroundColor:
                  category === gameCategory ? "#3366cc" : "#f2f6ff",
                color: category === gameCategory ? "#ffffff" : "black",
              }}
            >
              {gameCategory}
            </button>
          );
        })}
      </div>
      <div className="gameItems">
        {games.map((game, index) => {
          return <GameItem game={game} category={category} />;
        })}
      </div>
    </div>
  );
}
