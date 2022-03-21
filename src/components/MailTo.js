import React from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./mailTo.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function MailTo() {
  return (
    <Box className="card">
      <form>
        <h3>Contact Form</h3>

        <TextField
          className="textField"
          fullWidth
          label="Full Name"
          margin="normal"
          required
        />

        <TextField
          className="textField"
          fullWidth
          margin="normal"
          required
          label="Email"
        />

        <TextField
          className="textField"
          fullWidth
          multiline
          label="Message"
          rows="10"
          margin="normal"
        />
        <div>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
}

export default MailTo;
