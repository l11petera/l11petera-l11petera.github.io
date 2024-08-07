import React from "react";

function SingINPage() {
  return (
    <div>
      <div className="flex relative">
        <div>
          <img className="w-80" src="/cercle.png" alt="" />
        </div>
        <div className="fixed bottom-0 right-0">
          <img className="w-80" src="/cercle1.png" alt="" />
        </div>
      </div>
      <div className="absolute top-14 left-24 bg-white rounded-lg w-[1170px] h-[500px]">
        <div className="absolute left-3">
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex flex-row justify-end items-center">
          <img src="/cercle2.png" className="h-[500px]" alt="" />
        </div>
        <div className="absolute top-20 right-12">
          <img src="/Sign in-amico 1.png" className="h-[350px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SingINPage;
