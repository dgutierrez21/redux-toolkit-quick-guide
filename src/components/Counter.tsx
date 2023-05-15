import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { increment, incrementBy } from "../features/counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment By</button>
    </>
  );
};
