/*
Calculator:
1. Decide if the from is crypto or fiat
2. Grab the search code from the search bar
3. enter the code into lunarcrush or currencylayer
4. depending on the steps do 4 different functions
*/

/***************************************************************************************
 * Conversion functions
*/
//fiat to fiat(easy)
const fiatToFiat = () => {
  //get fiat results(includes exchange rates)
  axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&format=1&source=${document.getElementById('from').value}`)
    .then(res => {
      //get the conversions dictionary
      let conversions = res.data.quotes

      //get key string of the "from" str and the "to" str
      str = document.getElementById('from').value + document.getElementById('to').value
      
      //multiply the amount by conversion rate
      let result = parseFloat(document.getElementById('amount').value) * conversions[str.toUpperCase()]
      printResult(result)

    })
    .catch(err => console.error(err))
  }


//function to print out the answer
//expects a number value !!!!!!!!!!!!!!!!!!Still in progress
const printResult = (result) => {
  console.log(result)
}

//start logic on conversion

document.getElementById('convertCalc').addEventListener('click', event => {
  //determine which checkboxes are checked
  if(document.getElementById('fromFiat').checked) {
    fiatToFiat()
  }
})




/////TEST SECTION////////////*
// document.getElementById('convertCalc').addEventListener('click', event => {
//   event.preventDefault()
//   //get the exchange rate of the entered currency
//   axios.get(`http://api.currencylayer.com/live?access_key=34eca9d22b34a8f77ebe7de351ba880e&format=1&source=${document.getElementById('from').value}`)
//     .then(res => {
//       let source = res.data.source
//       console.log(source)
//       let quotes = res.data.quotes
//       console.log(quotes)
//     })
//     .catch(err => console.error(err))
// })