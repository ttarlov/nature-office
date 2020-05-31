import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'

const Weather = inject('GlobalStore')(observer(() => {

  const convertToFahrenheit = () => {
    const celsiusTemp = GlobalStore.weatherTemp
    return Math.round(celsiusTemp * 9/5 + 32)
  }

  return (
    <section>
      <p>{GlobalStore.weatherType}</p>
      <p>{convertToFahrenheit()} <span>&#176;</span>F</p>
    </section>
  )
}))

export default Weather
