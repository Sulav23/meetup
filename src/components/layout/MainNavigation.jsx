import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/favourite-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoutiteCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>Add New Meetups</Link>
          </li>
          <li>
            <Link to={"/favourites"}>
              Favourites{" "}
              <span className={classes.badge}>
                {favoutiteCtx.totalFavourite}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
