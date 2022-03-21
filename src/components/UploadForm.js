import Button from "@mui/material/Button";
import "./uploadForm.css";
import React from "react";

function UploadForm() {
  return (
    <div className="form">
      <form className="formContent">
        <h3>Upload Thesis</h3>
        <div className="box">
          <label>*Author</label>
          <div>
            <div>
              <input className="textfield" type="text" placeholder="Surname" />
            </div>
            <div>
              <input className="textfield" type="text" placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="box">
          <label>*Title</label>

          <div className="padding-16">
            <input className="textfield" placeholder="Title" />
          </div>
        </div>
        <div className="box">
          <div>
            <label>*Professor</label>
          </div>
          <div className="padding-16">
            <div>
              <input type="text" className="textfield" placeholder="Surname" />
            </div>
            <div>
              <input type="text" className="textfield" placeholder="Name" />
            </div>
          </div>
        </div>

        <input
          className="padding-16"
          id="upload-photo"
          name="upload-photo"
          type="file"
          required
        />

        <div className="padding-16">
          <Button variant="outlined">Upload</Button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
