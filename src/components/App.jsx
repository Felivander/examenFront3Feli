// App.js
import { useState } from "react";
import InputForm from "./InputForm";
import Card from "./Cards";

const App = () => {
  const [data, setData] = useState(null);

  const handleSubmit = (formData) => {
    setData(formData);
  };

  return (
    <div className="cartita">
      <h1>Formulario</h1>
      <InputForm onSubmit={handleSubmit} />
      {data && <Card input1={data.input1} input2={data.input2} />}
    </div>
  );
};

export default App;
