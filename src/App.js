import { useState } from "react";
import "./styles.css";

export default function App() {
  const [field, setField] = useState([{ value: "" }]);
  const handleAddField = () => {
    setField([...field, { value: "" }]);
  };
  const handleRemoveField = (index) => {
    const newField = [...field];
    newField.splice(index, 1);
    setField(newField);
  };
  const handleChange = (index, event) => {
    const newField = [...field];
    newField[index].value = event.target.value;
    setField(newField);
  };
  const handleSubmit = () => {
    console.log(field);
  };
  return (
    <div className="App">
      <h1>Dynamic Field Add/Remove</h1>
      <form>
        {field.map((text, index) => (
          <div key={index}>
            <input
              type="text"
              value={text.value}
              placeholder="Enter Value/Name"
              style={{ marginRight: 8 }}
              onChange={(event) => handleChange(index, event)}
            />
            <button type="button" onClick={(event) => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
      </form>
      <div style={{ marginTop: 10 }}>
        <button
          type="button"
          style={{ marginRight: 2 }}
          onClick={(event) => handleAddField()}
        >
          Add Field
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
