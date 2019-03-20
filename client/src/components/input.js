import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} className="form-control" />
      {error && <div className="alert alert-danger" />}
    </div>
  );
};

export default Input;