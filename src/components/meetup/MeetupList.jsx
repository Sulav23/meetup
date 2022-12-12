import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({ meetup }) => {
  return (
    <ul className={classes.list}>
      {meetup.map((item) => (
        <MeetupItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MeetupList;
