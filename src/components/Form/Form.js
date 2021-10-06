import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Grid, FormControl, RadioGroup, FormControlLabel, Radio, Button, TextField } from '@material-ui/core'

import Select from '../Select'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '40vh',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: 'linear-gradient(90deg, #042A2B 20%, #66ced6 100%)'
  },
  headerText: {
    color: '#FCF7F8',
    textAlign: 'center',
    margin: '0 0 30px 15px'
  },
  card: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '20px 5px',
    boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.065), 0 2px 2px hsl(0deg 0% 0% / 0.065), 0 4px 4px hsl(0deg 0% 0% / 0.065), 0 8px 8px hsl(0deg 0% 0% / 0.065), 0 16px 16px hsl(0deg 0% 0% / 0.065)'
  },
  radioGroup: {
    marginRight: '10px'
  },
  amount: {
    marginTop: '8px',
    marginRight: '10px'
  },
  button: {
    marginTop: '8px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 1px hsl(0deg 0% 0% / 0.065), 0 2px 2px hsl(0deg 0% 0% / 0.065), 0 4px 4px hsl(0deg 0% 0% / 0.065), 0 8px 8px hsl(0deg 0% 0% / 0.065), 0 16px 16px hsl(0deg 0% 0% / 0.065)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    display: 'inline'
  }
}))

const Form = props => {
  const classes = useStyles()

  const handleChangeCurrencyFamily = ({ target }) => {
    props.setCurrencyFamily(target.value)
  }

  return (
    <div className={classes.root}>
      <Grid>
        <Card className={classes.card}>
          <CardContent>
            <Typography>
              Pick your base currency and amount
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <form>
                  <FormControl>
                    <RadioGroup
                      aria-label="currency-family"
                      name="currency-family"
                      value={props.currencyFamily}
                      onChange={handleChangeCurrencyFamily}
                    >
                      <FormControlLabel value="fiat" control={<Radio />} label="Fiat" />
                      <FormControlLabel value="crypto" control={<Radio />} label="Crypto" />
                    </RadioGroup>
                  </FormControl>
                  <Select
                    currencyFamily={props.currencyFamily}
                    setCurrencyFamily={props.setCurrencyFamily}
                    cryptoData={props.cryptoData}
                    getCryptoData={props.getCryptoData}
                    fiatData={props.fiatData}
                    getFiatData={props.getFiatData}
                    fiatArray={props.fiatArray}
                    cryptoArray={props.cryptoArray}
                    input={props.input}
                    handleInputChange={props.handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="Amount"
                    name='amount'
                    className={classes.amount}
                    value={props.input.amount}
                    onChange={props.handleInputChange}
                  />
                  <Button
                    className={classes.button}
                    onClick={props.handleConversion}
                  >
                    Convert
                  </Button>
                </form>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Form