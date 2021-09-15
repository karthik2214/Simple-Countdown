import React from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <h1>Simple Countdown</h1>
      <h2>Countdown : {counter}</h2>
    </div>
  );
}
