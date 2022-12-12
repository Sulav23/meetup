import React, { useContext } from "react";
import MeetupList from "../components/meetup/MeetupList";
import FavouriteContext from "../store/favourite-context";

const Favourites = () => {
  const favoutiteCtx = useContext(FavouriteContext);

  if (favoutiteCtx.total === 0) {
    return <p>No Favourte To Show</p>;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      <MeetupList meetup={favoutiteCtx.favourite} />
    </section>
  );
};

export default Favourites;
