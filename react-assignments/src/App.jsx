import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  //  TODO ad routes to the components we've created so far
  return (
    <div>
      <Nav /> {/* Navigation */}
      <Routes>
        <Route
          path="/PropsComponent"
          element={<PropsComponent name={person.name} info={person.info} />}
        />
        <Route path="/EffectsComponent" element={<EffectsComponent />} />
        <Route path="/MyStateComponent" element={<MyStateComponent />} />
      </Routes>
    </div>
  );
}

export default App;
