import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-container">
        <div className="counter-box">
          <h2 className={count > 10 ? "count count-high" : "count"} > Count: {count}</h2>
          <div className="counter-buttons">
            <button className="btn-inc" onClick={() => setCount(count + 1)}>
              Increment
            </button>
            <button
              className="btn-dec"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrement
            </button>
          </div>

          <button className="btn-reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
