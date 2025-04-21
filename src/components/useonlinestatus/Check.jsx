import React from "react";
import UseOnline from "./UseOnline";

const Check = () => {
  const isOnline = UseOnline();
  return (
    <div>
      <h1>useOnlineStatus hook</h1>
      <h2>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</h2>
    </div>
  );
};

export default Check;
