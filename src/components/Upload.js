import React from "react";
import { TextField } from "@mui/material";

function Upload() {
  return (
    <div>
      <form>
        <TextField label="Full Name" />
        <TextField label="Email" />
        <TextField label="Message" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Upload;
