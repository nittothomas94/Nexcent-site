const CommunityCard = ({ image, title, description }) => {
  return (
    <div className="w-100 h-60 p-10 shadow-xl/20 flex flex-col gap-4 items-center justify-center">
      <img src={image} alt="image" className="w-16" />
      <h1>{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default CommunityCard;
