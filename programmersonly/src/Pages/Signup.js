import React from "react";
import {
  TextField,
  Grid,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Typography
} from "@material-ui/core";

function Signup() {
  return (
    <div justify="center">
      <form noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={10}>
          <TextField required id="standard-required-input" label="First Name" />
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="Gender" name="Gender" row>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <FormLabel component="legend">Looking For</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="male"
              control={<Checkbox />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Checkbox />}
              label="Female"
            />
            <FormControlLabel
              value="other"
              control={<Checkbox />}
              label="Other"
            />
          </FormGroup>
          <TextField required id="standard-required-input" label="Username" />
          <TextField
            required
            id="standard-required-input"
            label="Password"
            type="password"
          />
          <TextField
            required
            id="standard-required-input"
            label="Link to Code"
          />
          <TextField
            id="standard-textarea"
            rows="4"
            label="Enter bio"
            multiline
          />
          <Button variant="outlined">Submit</Button>
        </Grid>
      </form>
    </div>
  );
}

export default Signup;
