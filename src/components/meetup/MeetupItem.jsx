import React from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ image: img, title, address, discription: discp }) => {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={img} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{discp}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
