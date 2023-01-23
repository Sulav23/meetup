import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

const NewMeetups = () => {
  const navigate = useNavigate();

  const addMeetup = (meetupData) => {
    fetch("https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    }).then(() => navigate("/", { replace: true }));
  };
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm addMeetup={addMeetup} />
    </section>
  );
};

export default NewMeetups;
