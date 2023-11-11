import React from "react";
import iconDice from "../../assets/images/icon-dice.svg";

function Button({loading, ...props}) {
  return (
    <div {...props} className={`button-container ${loading ? "loading" : ""}`}>
      <button disabled={loading}>
        <img src={iconDice} alt="dice-icon" />
      </button>
    </div>
  );
}

export default Button;
