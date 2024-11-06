
const InfoCard = ({ title, value, percentageChange }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    
    <p className="text-sm">{title}</p>
    <h3 className="text-2xl font-semibold">{value}</h3>
    <p className="text-green-500 text-xs">+{percentageChange}%</p>
  </div>
);

export default InfoCard;
