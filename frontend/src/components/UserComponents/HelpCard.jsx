const HelpCard = ({ image, number, text }) => {
  return (
    <div className="flex gap-2 p-2 cursor-pointer hover:shadow-2xl">
      <img src={image} className="w-15" alt="icon image" />
      <div className="">
        <p>{number}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HelpCard;
