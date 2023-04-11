import React from "react";

const SpinnerAnim = () => {
  return (
   <div>
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
</div>

  );
};

export default SpinnerAnim;
