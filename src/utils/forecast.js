const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const urlWeather = `http://api.weatherstack.com/current?access_key=2d916ba6837148b11a295d7c0322d6c7&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`

    request({url: urlWeather, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find loation!', undefined)
        } else {
            // callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast