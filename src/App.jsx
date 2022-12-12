import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";

const App = () => {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetups />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
};

export default App;
