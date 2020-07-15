import React from "react";

export default function EditBio({ bio, onChange }) {
  return (
    <div className="editBio">
      <textarea name="bio" value={bio} onChange={onChange} />
    </div>
  );
}
