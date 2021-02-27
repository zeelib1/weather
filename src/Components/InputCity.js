import React from "react";
import "../styles/InputCity.css";

const InputCity = ({reference, submitCity}) => {
  return (
    <div>
      <form onSubmit={submitCity} className="inputContainer">
        <i class="fa fa-search icon"> </i>
        <input  ref={reference} class="input-field" type="text" placeholder="Enter City" />
        <button type="submit"   className="search-button">
          Find
        </button>
      </form>
    </div>
  );
};

export default InputCity;
