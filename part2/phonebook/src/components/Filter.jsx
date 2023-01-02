import React from "react";

const Filter = ({ setSerach, search }) => {
  return (
    <div>
      <input value={search} onChange={(e) => setSerach(e.target.value)} />
    </div>
  );
};

export default Filter;
