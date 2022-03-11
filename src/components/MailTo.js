import React from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";

function MailTo() {
  return (
    <Box style={{ backgroundColor: "red" }}>
      <form>
        <h3>Contact Form</h3>
        <div>
          <TextField label="Full Name" />
        </div>
        <div>
          <TextField label="Email" />
        </div>
        <div>
          <TextField label="Message" />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  );
}

export default MailTo;
