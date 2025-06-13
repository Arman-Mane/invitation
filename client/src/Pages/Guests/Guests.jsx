import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Guests = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    async function getGuests() {
      try {
        const {data} = await axios.get("http://localhost:5000/guests");
        // console.log('response:', response)
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
        {guests.guests?.map((guest) => (
          <li key={guest?.id}>{guest?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Guests;
