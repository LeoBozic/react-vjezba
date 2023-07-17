import React from "react";

function Function2({ children, ime, godine }) {
  return (
    <>
      <div>
        {ime} {godine}
      </div>
      {children}
    </>
  );
}

export default Function2;
