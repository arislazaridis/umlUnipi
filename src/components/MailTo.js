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
        <div className="textField">
          <TextField label="Full Name" />
        </div>
        <div className="textField">
          <TextField label="Email" />
        </div>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Text your message.."
          style={{ width: 200 }}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  );
}

export default MailTo;
