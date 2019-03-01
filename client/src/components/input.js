import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={(name === "password") ? "password" : "text"}
        className="form-control"
      />

      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger" />}
    </div>
  );
};

export default Input;
