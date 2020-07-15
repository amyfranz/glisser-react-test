import React from "react";

export default function EditDetails({ firstName, lastName, onChange }) {
  return (
    <>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={firstName} onChange={onChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={lastName} onChange={onChange} />
      </div>
    </>
  );
}
