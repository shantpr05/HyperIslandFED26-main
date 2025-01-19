import React from "react";

const PersonDetails = ({ person }) => (
  <div>
    <h2>Person Details</h2>
    <p><strong>Name:</strong> {person.name}</p>
    <p><strong>Age:</strong> {person.info.age}</p>
    <p><strong>City:</strong> {person.info.city}</p>
    <p><strong>Job:</strong> {person.info.job}</p>
    <p><strong>Hobbies:</strong></p>
    <ul>
      {person.info.hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  </div>
);

export default PersonDetails;