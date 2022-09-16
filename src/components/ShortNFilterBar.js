import React from "react";

export default function ShortNFilterBar() {
  return (
    <div className="fixed flex bottom-0 backdrop-blur-3xl backdrop-brightness-125 w-full h-14 text-slate-600">
      <div className="grid place-content-center w-1/2 border-r ">
        <h5 className="font-medium"> SORT</h5>
      </div>
      <div className="grid place-content-center w-1/2 ">
        <h6 className="font-medium">FILTER</h6>
      </div>
    </div>
  );
}
