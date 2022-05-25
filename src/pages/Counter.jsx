import { decrement, increment } from "../store/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
