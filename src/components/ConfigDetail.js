import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export default function ConfigDetail() {
    const [type, setType] = React.useState('');
    const [num, setNum] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
        setNum(event.target.value);
        console.log("value" + this.firstName);

    };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Configuration Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cluster_name"
            label="Cluster Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cluster_plan"
            label="Cluster Plan"
            helperText="(ex. dev, prod)"
            fullWidth
          />
        </Grid>
         <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    id="NodeType"
                    // component={Select}
                    label="Select a AWS Instance Type"
                    helperText="Select a AWS Instance Type"

                    formControlProps={{ fullWidth: true }}
                  >
                        <MenuItem value={10}>t3.small</MenuItem>
                        <MenuItem value={20}>t3.medium</MenuItem>
                        <MenuItem value={30}>t3.large</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select a AWS Instance Type"
                    formControlProps={{ fullWidth: true }}
                  >
                      <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={3}>4</MenuItem>
                        <MenuItem value={3}>5</MenuItem>
                  </Select>
                </Grid>
        {/* <Grid item xs={12}>
                  <FormControl>
                     <InputLabel id="NodeType" fullWidth >AWS Instance Type</InputLabel>
                     <Select
                        id="NodeType"
                        value={type}
                        InputLabelProps={{
                             shrink: true,
                        }}
                         onChange={handleChange}
                     >
                         <MenuItem value="">
                             <em>None</em>
                         </MenuItem>
                        <MenuItem value={10}>t3.small</MenuItem>
                        <MenuItem value={20}>t3.medium</MenuItem>
                        <MenuItem value={30}>t3.large</MenuItem>
                    </Select>
                 </FormControl>
        </Grid> */}
        {/* <Grid item xs={12}>
                  <FormControl>
                     <InputLabel id="worker_machine_count" >Worker Machine Count</InputLabel>
                     <Select
                        id="worker_machine_count"
                        value={num}
                        helperText="(ex. dev, prod)"
                        fullWidth
                         onChange={handleChange}
                     >
                         <MenuItem value="">
                             <em>None</em>
                         </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={3}>4</MenuItem>
                        <MenuItem value={3}>5</MenuItem>
                    </Select>
                 </FormControl>
        </Grid> */}
      </Grid>
    </React.Fragment>

  );
}