import React, { useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

const Input = () => {
  const [data, setData] = UseLocalStorage("name", "");

  return (
    <div>
        <h1>useLocalStorage hook</h1>
      <input value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  );
};

export default Input;
