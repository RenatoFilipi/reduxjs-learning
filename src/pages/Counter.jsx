import { decrement, increment, reset } from "../store/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Footer from "../components/shared/Footer";
import { useLocation } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const el = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setCount(el);
  }, [el]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [location]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col m-10 flex-grow">
          <h1 className="font-semibold mb-16 text-5xl">Counter</h1>
          <div className="w-96 flex justify-between items-center">
            <button
              className="btn btn-primary"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span className="font-semibold text-xl">{count}</span>
            <button
              className="btn btn-primary"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Counter;
