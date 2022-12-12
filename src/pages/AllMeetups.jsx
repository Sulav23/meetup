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
        "https://meetup-f4070-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
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

      <MeetupList meetup={loadedMeetupData} />
    </section>
  );
};

export default AllMeetups;
