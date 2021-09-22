import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { FormControl, InputLabel, NativeSelect, FormHelperText, Button, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  row: {
    display: 'inline'
  },
  nativeSelect: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    display: 'inline'
  }
}));

const Select = props => {
  const classes = useStyles();
  const [state, setState] = useState([]);

  let type = null
  let options = null

  if (props.currencyFamily === 'crypto') {
    type = props.cryptoArray
  } else if (props.currencyFamily === 'fiat') {
    type = props.fiatArray
  }

  if (type) {
    options = type.map((el, i) => <option key={i}>{el.code} - {el.name}</option>)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <FormControl className={classes.formControl}>
      <Grid container spacing={1}>
        <Grid item className={classes.row}>
          <InputLabel htmlFor="age-native-helper">From Currency</InputLabel>
          <NativeSelect
            value={state.age}
            className={classes.nativeSelect}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-native-helper',
            }}
          >
            <option aria-label="Currency Options" value="Currency Options">
              Currency Options
            </option>  
              {options}
          </NativeSelect>
          <FormHelperText>Choose your currency to convert from</FormHelperText>
        </Grid>
      </Grid>
      </FormControl>
  )
}

export default Select