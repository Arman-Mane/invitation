import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Tables = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    async function getGuests() {
      try {
        const { data } = await axios.get("http://localhost:5000/tables");
        // const data = await response.json();
        setGuests(data);
      } catch (error) {
        console.error("Չհաջողվեց բերել հյուրերը:", error);
      }
    }

    getGuests();
  }, []);

  return (
    <div>
      <h2>Հյուրերի ցանկը</h2>
      <ul>
        {guests.tables?.map((guest) => (
          <li key={guest?.id}>{guest?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;
