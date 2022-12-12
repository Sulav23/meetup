import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

const NewMeetups = () => {
  const navigate = useNavigate();

  const addMeetup = (meetupData) => {
    fetch(
      "https://meetup-f4070-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetupData),
      }
    ).then(() => navigate("/", { replace: true }));
  };
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm addMeetup={addMeetup} />
    </section>
  );
};

export default NewMeetups;
