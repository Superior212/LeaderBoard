import React,{useContext} from "react";
import InternContext from './context';

const InternList = () => {
  const interns = useContext(InternContext);
  

};

const InternProvider = ({ children }) => {
  const interns = [
    {
      id: 1,
      name: "John Doe",
      picture: "https://placehold.it/100x100",
      info: "Lorem ipsum dolor sit amet",
      grades: 1098 ,
    },
    {
      id: 2,
      name: "Jane Doe",
      picture: "https://placehold.it/100x100",
      info: "Consectetur adipiscing elit",
      grades: 1195,
    },
    {
      id: 3,
      name: "Bob Smith",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 980,
    },
    {
      id: 4,
      name: "Bob Smith",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1080,
    },
    {
      id: 5,
      name: "Bob Smith",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1110,
    },
    {
      id: 6,
      name: "Bob Smith",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1000,
    }
  ];

  return (
    <InternContext.Provider value={interns}>
      {children}
    </InternContext.Provider>
  );
};
export default InternProvider;