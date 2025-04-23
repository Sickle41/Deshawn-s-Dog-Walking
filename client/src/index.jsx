import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { DogDetails } from "./DogDetails";
import { AddDog } from "./AddDog.jsx";
import { WalkerList } from "./WalkersList.jsx";
import { AssignableDogs } from "./AssignableDogs.jsx";
import { Cities } from "./Cities.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/dogs/:id" element={<DogDetails />} /> 
        <Route path="/addDog" element={<AddDog/>}/>
        <Route path="/walkers" element={<WalkerList/>}/>
        <Route path="/assignabledogs/:walkerId" element={<AssignableDogs/>}/>
        <Route path="/cities" element={<Cities/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
