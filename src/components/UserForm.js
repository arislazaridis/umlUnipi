import React from "react";
import MailTo from "./MailTo";
import UploadForm from "./UploadForm";
import "./userForm.css";

function UserForm() {
  return (
    <div>
      <div className="content">
        <MailTo />
        <UploadForm />
      </div>
    </div>
  );
}

export default UserForm;
