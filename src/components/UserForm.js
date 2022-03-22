import React from "react";
import MailTo from "./MailTo";
import UploadForm from "./UploadForm";
import "./userForm.css";
import VisitForum from "./VisitForum";

function UserForm() {
  return (
    <div className="body">
      <div className="content">
        <MailTo />
        <UploadForm />
      </div>
      <div className="forum">
        <VisitForum />
      </div>
    </div>
  );
}

export default UserForm;
