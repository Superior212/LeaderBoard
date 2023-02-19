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
      name: "Jane Sam",
      picture: "https://placehold.it/100x100",
      info: "Consectetur adipiscing elit",
      grades: 1195,
    },
    {
      id: 3,
      name: "Bob Smith",
      picture: "https://via.placeholder.com/600/771796",
      info: "Sed do eiusmod tempor",
      grades: 980,
    },
    {
      id: 4,
      name: "Ervin Howell",
      picture: "https://via.placeholder.com/150/24f355",
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
      name: "Clementine Bauch",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1000,
    },
    {
      id: 7,
      name: "Romaguera-Jacobson",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1300,
    },
    {
      id: 8,
      name: "Patricia Lebsack",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1100,
    },
    {
      id: 9,
      name: "Chelsey Dietrich",
      picture: "https://placehold.it/100x100",
      info: "Sed do eiusmod tempor",
      grades: 1000,
    },
    {
      id: 10,
      name: "Dennis Schulist",
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