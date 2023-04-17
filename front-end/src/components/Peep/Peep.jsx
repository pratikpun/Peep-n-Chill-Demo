import React from "react";

const Peep = ({ peeps }) => {
  return (
    <div>
      <div>
        Posted by: {peeps.userHandle} {console.log(peeps)}
      </div>
    </div>
  );
};

export default Peep;
