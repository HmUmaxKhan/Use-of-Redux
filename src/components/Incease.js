import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

function Incease() {
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(actionCreators.increament(10)); // Dispatch the action when the button is clicked
    };

    const handleDecrement = () => {
        dispatch(actionCreators.decrement(5)); // Dispatch the action when the button is clicked
    };
  return (
    <div className="container my-5 mx-3">
    <button className="mx-2 btn btn-primary" onClick={handleIncrement} type="submit">+</button>
      <h5 className="d-inline-block">Increase/Decrease</h5>
    <button className="mx-2 btn btn-primary" onClick={handleDecrement} type="submit">-</button>
    </div>
  );
}

export default Incease;
