import React from "react";

const PersonDetails = ({ person }) => (
  <div>
    <h2>Person Details</h2>
    <p>Name: {person.name}</p>
    <p>Age: {person.info.age}</p>
    <p>City: {person.info.city}</p>
    <p>Job: {person.info.job}</p>
    <p>Hobbies:</p>
    <ul>
      {person.info.hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  </div>
);

export default PersonDetails;