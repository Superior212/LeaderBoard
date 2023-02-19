import React, { useContext } from "react";
import InternCard from "./InternCard";
import { InternContext } from './context';
import "./App.css";
import Details from "./Details";

const sortInternsByGrades = (interns) => {
  return interns.sort((a, b) => b.grades - a.grades);
};

const InternList = () => {
  const interns = useContext(InternContext);
  const sortedInterns = sortInternsByGrades(interns);
  
  return (
    <div className="display">
      <h2>Intern Leaderboard</h2>
      {sortedInterns.map((intern) => (
        <InternCard key={intern.id} intern={intern} />
        // <Details key={intern.id} intern={intern} />
      ))}
    </div>
  );
};

export default InternList;
