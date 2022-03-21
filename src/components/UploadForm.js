import { Label, LeakAdd } from "@mui/icons-material";
import { FormLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./uploadForm.css";
import React from "react";

function UploadForm() {
  return (
    <div>
      <form className="form">
        <h3>Upload Thesis</h3>
        <div>
          <FormLabel>Author</FormLabel>
        </div>
        <div className="padding-16">
          <TextField label="Surname" />
          <TextField label="Name" />
        </div>
        <div>
          <FormLabel>Title</FormLabel>
        </div>
        <div className="padding-16">
          <TextField label="Title" />
        </div>
        <div>
          <FormLabel>Professor</FormLabel>
        </div>
        <div className="padding-16">
          <TextField label="Surname" />
          <TextField label="Name" />
        </div>
        <div>
          <Button variant="outlined">Upload</Button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
