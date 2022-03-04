import "./Your_Hand.css";
import "../Card_Images.css";

const Your_Cards_Row = ({ hitCards }) => {
  return (
    <div className="your-cards-row">
      <div className="card-cont-marg-top">
        {hitCards.length > 0 &&
          hitCards.map((card, idx) => <div key={idx} className={card}></div>)}
      </div>
    </div>
  );
};

export default Your_Cards_Row;
