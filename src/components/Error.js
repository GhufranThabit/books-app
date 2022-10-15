import React from "react";

const Error = ({ text }) => {
  return (
    <div className="error">
      <h3>Oops, Something went wrong!</h3>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Error;
