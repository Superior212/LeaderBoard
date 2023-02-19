import { FaInfoCircle } from "react-icons/fa";



const InternCard = ({ intern }) => {
  return (
    <>
    <div className="displayArea">
      <img src={intern.picture} alt={intern.name} />
      <h3>{intern.name}</h3>
      <p>Grades: {intern.grades} Points</p>

      <button><a href="/Details"> <FaInfoCircle/></a></button>
      
</div> 
</>   
  );
  
};

export default InternCard;
