// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React, { useEffect, useState } from "react";
import "./EffectsComponent.css"

const GameOfThronesCharacters = () => {
  const [characters, setCharacters] = useState([]); // State to store the fetched characters
  const [loading, setLoading] = useState(true); // State to show a loading indicator
  const [error, setError] = useState(null); // State to handle any errors

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://thronesapi.com/api/v2/Characters");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data); // Store the data in state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchCharacters();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  // Render the component
  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      {loading && <p>Loading characters...</p>} {/* Show loading message */}
      {error && <p>Error: {error}</p>} {/* Show error message if there's an error */}
      <ul>
        {/* Display the list of characters */}
        {characters.map((character) => (
          <li key={character.id}>
            <img
              src={character.imageUrl}
              alt={character.fullName}
              style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "50%" }}
            />
            {character.fullName} - {character.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameOfThronesCharacters;
