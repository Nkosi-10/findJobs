
// eslint-disable-next-line react/prop-types
const Card = ({ children, bg ="bg-gray-700" }) => {
  return (
    <div className ={` ${bg} p-6 rounded-lg shadow-md`} >
      {children}</div>
  );
};

export default Card
