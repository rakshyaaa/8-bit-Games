import { overlayContent } from "./Data";
export default function Overlay({
  overlay,
  setOverlay,
  title,
  image,
  category,
  releaseDate,
  developer,
  numOfPlayers,
}) {
  return (
    <div
      className="gameOverlay"
      style={{ display: overlay ? "block" : "none" }}
      onClick={() => setOverlay(false)}
    >
      <div className="gamePopUp">
        <div className="gamePopUpImage">
          <img className="gamePopUpImageSource" {...image} />
        </div>
        <div className="gamePopUpContent">
          <div className="gamePopUpTitle">
            <h1 className="gamePopUpName">{title}</h1>
            <p className="gamePopUpType">
              {category.map((category) => {
                return <div>{category}</div>;
              })}
            </p>
          </div>

          <div className="gamePopUpInformation">
            <div className="gameInformationAttribute">
              <p className="gameInformationAttributeKey"></p>
              <p className="gameInformationAttributeValue"></p>
            </div>
          </div>
          <div className="playGame">
            <a className="playGameButton">{overlayContent.buttonText}</a>
          </div>
        </div>
        <div className="cancelOverlay" onClick={() => setOverlay(false)}>
          <img className="cancelOverlayImage" {...overlayContent.closeIcon} />
        </div>
      </div>
    </div>
  );
}
