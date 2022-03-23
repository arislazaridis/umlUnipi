import Button from "@mui/material/Button";
import "./uploadForm.css";
import React, { useState } from "react";

const uploadData = {
  surname: "",
  name: "",
  title: "",
  profSurname: "",
  profName: "",
  file: "",
};

function UploadForm() {
  const [data, setData] = useState([uploadData]);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleOnChange = (e) => {
    setData({ ...data, surname: e.target.value });
  };
  console.log(data);

  return (
    <div className="form">
      <form className="formContent">
        <h3>Upload Thesis</h3>
        <div className="box">
          <label>*Author</label>
          <div>
            <div>
              <input
                className="textfield"
                type="text"
                placeholder="Surname"
                onChange={(e) => handleOnChange(e)}
              />
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
          <Button variant="outlined" onClick={(e) => handleUpload(e)}>
            Upload
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
