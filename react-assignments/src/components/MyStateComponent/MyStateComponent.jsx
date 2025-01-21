import React, { useState } from "react";
import "./MyStateComponent.css"

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    // Optionally reset the form
    setFormData({ name: "", age: "" });
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
