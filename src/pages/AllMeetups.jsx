import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetup/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetupData, setLoadedMeetupData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://638ef4d34ddca317d7ea4b6b.mockapi.io/contact/meetup"
      );
      const data = await res.json();
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };

        meetups.push(meetup);
      }
      setLoadedMeetupData(meetups);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <section>Loading ...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>

      {Boolean(loadedMeetupData.length) ? (
        <MeetupList meetup={loadedMeetupData} />
      ) : (
        <h3>No Meetups</h3>
      )}
    </section>
  );
};

export default AllMeetups;
