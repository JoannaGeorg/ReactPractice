const request = require('request')

function forecast(callback) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&forecast_days=1`

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      console.log(error)
      callback('Unable to connect to the weather service.', undefined)
    } else if (body.error) {
      console.log(body.error)
      callback('Unable to find the location.', undefined)
    } else {
      callback(undefined, body.current.temperature_2m)
    }
  })
}


//calling the function.
forecast((err, temp) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Temperature: ', temp, 'C');
  }
})