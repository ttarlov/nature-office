import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'

const Weather = inject('GlobalStore')(observer(() => {
  const convertToFahrenheit = () => {
    const celsiusTemp = GlobalStore.weatherTemp
    return Math.round(celsiusTemp * 9/5 + 32)
  }

  return (
    <header className="weather">
      <section className="content-wrapper">
        <div className="temp-location-container">
          <p className="temp">{convertToFahrenheit()} <span>&#176;</span>F</p>
          <p className="location">{GlobalStore.city}, {GlobalStore.zipCode}</p>
        </div>
        <p className="weather-type">{GlobalStore.weatherType}</p>
      </section>
    </header>
  )
}))

export default Weather
