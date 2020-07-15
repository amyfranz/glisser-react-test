import React from "react";
import "./Bio.css";

export default function Bio({ bio }) {
  return (
    <div className="bio">
      <h3>My Bio</h3>
      <p>{bio}</p>
    </div>
  );
}
