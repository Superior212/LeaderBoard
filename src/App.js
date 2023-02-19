import css from './App.css';
import React from 'react'
import InternList from './InternList'
import InternProvider from './InternProvider';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InternProvider><InternList /></InternProvider>} />
      <Route path="/Details" element={<Details/>} />     
    </Routes>
  );
};



export default App