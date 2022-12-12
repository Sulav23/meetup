import React, { useContext } from "react";
import FavouriteContext from "../../store/favourite-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address, discription }) => {
  const favouriteCtx = useContext(FavouriteContext);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(id);

  const toggleFavouriteSatus = () => {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(id);
    } else {
      favouriteCtx.addFavourite({
        id,
        title,
        discription,
        image,
        address,
      });
    }
  };
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{discription}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteSatus}>
            {itemIsFavourite ? "Remove From Favourtes" : "Add To Favourites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
