import { useEffect, useState } from "react";
import axios from "axios";

// 1. Make an http request to the API to get the data
// 2. Store the data somewhere (in a state)
// 3. Render it

const CharacterList = () => {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);

  // useEffect runs AFTER the component is mounted on the page
  useEffect(() => {
    console.log("hello"); // when is this triggered???
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-assessment-api.herokuapp.com/hp/characters"
        );
        setList(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  // As we have it right now, runs ONLY ONCE. At the start!

  console.log("list", list); // does it run the same amount of times as this one?
  return (
    <div>
      <h1>Character List</h1>
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>

      {list.map((c) => (
        <div style={{ border: "2px solid white", marginTop: 30 }}>
          <img src={c.imgUrl} style={{ maxWidth: 100 }} />
          <h3>{c.name}</h3>
        </div>
      ))}
    </div>
  );
};

// the component is MOUNTED

export default CharacterList;
