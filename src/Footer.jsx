export default function Footer({ items, description }) {
  return (
    <div className="footer">
      <div className="socials">
        <p>Follow us on:</p>
        {items.map((item, index) => {
          return <img className="iconsSocial" {...item}></img>;
        })}
      </div>
      <div className="development">
        <p>{description}</p>
      </div>
    </div>
  );
}
