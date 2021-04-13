import { render } from "@testing-library/react";
import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Grid from 'final-form-material-ui'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

const currencies = [
    { value: 't3.small', label: 't3.small' },
    {
        value: 't3.medium',
        label: 't3.medium',
    },
    {
        value: 't3.large',
        label: 't3.large',
    },
];

const workers = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5',
    },
];

export default function Config() {
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const [currency, setCurrency] = React.useState('');
    const [worker, setWorker] = React.useState('1, 2, 3, 4, 5');



    const handleChange = (event) => {
        setType(event.target.value);
        setCurrency(event.target.value);
        setWorker(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-number"
                    label="Cluster Plan"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-number"
                    label="Cluster Name"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="NodeType"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your AWS Instance"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="workers"
                    select
                    label="Select"
                    value={worker}
                    onChange={handleChange}
                    helperText="Please select the number of workers"
                >
                    {workers.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>


            </div>
        </form>
    );
}


