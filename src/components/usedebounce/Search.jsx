import React from "react";
import { useState } from "react";
import { UseDebounce } from "./UseDebounce";

const Search = () => {
  const [search, setSearch] = useState("");

  const debounced = UseDebounce(search, 1000);

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>useDebounce hook</h1>
      <input
        placeholder="type here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      <h5>Normal : {search}</h5>
      <hr />
      <h5>Debounced : {debounced}</h5>
    </div>
  );
};

export default Search;
