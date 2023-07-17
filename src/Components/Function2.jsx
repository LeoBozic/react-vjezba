import React from "react";

function Function2({ children, ime, godine }) {
  return (
    <>
      <div>
        {ime} {godine}
      </div>
      <div>{children}</div>
    </>
  );
}

export default Function2;
