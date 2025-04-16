const WhiteComponent = ({ image, heading, description, butText }) => {
  return (
    <div className="flex items-center gap-10 justify-center  border">
      <img src={image} alt="component" className="w-100 h-100 " />
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">{heading}</h1>
        <p className="text-gray-600">{description}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-fit">
          {butText}
        </button>
      </div>
    </div>
  );
};

export default WhiteComponent;
