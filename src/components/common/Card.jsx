import Button from "./Button";
import Image from "./Image";

const Card = (props) => {
    ///destructuring 
  const { cardClass, cardData } = props;
  return (
    <div className={`card ${props.cardClass}`}>
      <div className="thumanail">
        <Image 
        className="img-class"
        src={cardData.thumbUrl} 
        alt="text" 
        width={400}
        height={200}
        />
      </div>
      <div className="content">
        <h3 className="title">{cardData.title}</h3>
       <Button btnClass="w-full bg-success" btnText="card btn"></Button>
      </div>
    </div>
  );
};

export default Card;
