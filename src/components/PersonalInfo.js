import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

export default function PersonalInfoForm() {
    const [type, setType] = React.useState('');
     const handleChange = (event) => {
         setType(event.target.value);
         const  firstName = '';
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="first-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="team"
            name="team"
            label="Team"
            fullWidth
            autoComplete="team-name"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
                <FormControl>
                     <InputLabel id="NodeType">AWS Instance Type</InputLabel>
                     <Select
                        id="NodeType"
                        value={type}
                        InputLabelProps={{
                             shrink: true,
                        }}
                         onChange={handleChange}
                     >s
                         <MenuItem value="">
                             <em>None</em>
                         </MenuItem>
                        <MenuItem value={10}>t3.small</MenuItem>
                        <MenuItem value={20}>t3.medium</MenuItem>
                        <MenuItem value={30}>t3.large</MenuItem>
                    </Select>
                 </FormControl>
</Grid> */}


      </Grid>
      <div>
        <h1>{JSON.stringify(type)}</h1>
    </div>
    </React.Fragment>
    
  );
}