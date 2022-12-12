import React from "react";
import MeetupList from "../components/meetup/MeetupList";
import { DUMMY_DATA } from "../dummy";

const AllMeetups = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetup={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetups;
