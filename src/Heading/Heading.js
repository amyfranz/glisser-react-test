import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Heading.css";

export default function Heading({ firstName, lastName }) {
  return (
    <div className="heading">
      <div className="avatar">
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
      <h2 className="usersName">
        {firstName} {lastName}
      </h2>
    </div>
  );
}
