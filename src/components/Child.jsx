import Card from "./common/Card";

const Child = () => {
  const cardData = {
    thumbUrl: "imageprops.png",
    title: "product card",
  };
  return (
    <div className="child">
      <h2>child component</h2>
      <Card cardClass="simple" cardData={cardData} />
    </div>
  );
};

export default Child;
