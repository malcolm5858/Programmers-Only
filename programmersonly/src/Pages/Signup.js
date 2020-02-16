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
  Link
} from "@material-ui/core";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      Gender: "",
      LookFor: [],
      Username: "",
      Password: "",
      LinktoCode: "",
      Bio: ""
    };
    this.handleTextBox = this.handleTextBox.bind(this);
    this.handleRadioButtons = this.handleRadioButtons.bind(this);
    this.handleCheckBoxes = this.handleCheckBoxes.bind(this);
  }

  handleTextBox(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleRadioButtons(event) {
    const target = event.target;
    const name = target.name;
    var value = "";
    switch (name) {
      case "Male":
        value = "Male";
        break;
      case "Female":
        value = "Female";
        break;
      case "Other":
        value = "Other";
        break;
      default:
        break;
    }
    this.setState({
      Gender: value
    });
  }

  handleCheckBoxes(event) {
    const target = event.target;
    const name = target.name;
    const onOff = target.checked;
    var value = this.state.LookFor;
    if (onOff) {
      switch (name) {
        case "Male":
          value.push("Male");
          break;
        case "Female":
          value.push("Female");
          break;
        case "Other":
          value.push("Other");
          break;
        default:
          break;
      }
    } else {
      var index = value.indexOf(name);
      if (index !== -1) value.splice(index, 1);
    }

    this.setState({
      LookFor: value
    });
  }

  render() {
    return (
      <div justify="center">
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={0}>
            <h1>Signup</h1>
            <TextField
              required
              id="standard-required-input"
              name="FirstName"
              label="First Name"
              onChange={this.handleTextBox}
            />
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="Gender" name="Gender" row>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                name="Female"
                onChange={this.handleRadioButtons}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                name="Male"
                onChange={this.handleRadioButtons}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                name="Other"
                onChange={this.handleRadioButtons}
              />
            </RadioGroup>
            <FormLabel component="legend">Looking For</FormLabel>
            <FormGroup row>
              <FormControlLabel
                value="male"
                control={<Checkbox />}
                label="Male"
                name="Male"
                onChange={this.handleCheckBoxes}
              />
              <FormControlLabel
                value="female"
                control={<Checkbox />}
                label="Female"
                name="Female"
                onChange={this.handleCheckBoxes}
              />
              <FormControlLabel
                value="other"
                control={<Checkbox />}
                label="Other"
                name="Other"
                onChange={this.handleCheckBoxes}
              />
            </FormGroup>
            <TextField
              required
              id="standard-required-input"
              label="Username"
              name="Username"
              onChange={this.handleTextBox}
            />
            <TextField
              required
              id="standard-required-input"
              label="Password"
              type="password"
              name="Password"
              onChange={this.handleTextBox}
            />
            <TextField
              required
              id="standard-required-input"
              label="Link to Code"
              name="LinktoCode"
              onChange={this.handleTextBox}
            />
            <TextField
              id="standard-textarea"
              rows="4"
              label="Enter bio"
              name="Bio"
              onChange={this.handleTextBox}
              multiline
            />
            <Button
              onClick={async () => {
                const data = this.state;
                const response = await fetch("/getId", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                });

                response.json().then(data => {
                  console.log("SHOULDNOTBEHERE");
                  window.location.assign("/{data.id}");
                });
              }}>
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Signup;
