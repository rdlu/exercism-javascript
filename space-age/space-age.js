export const age = (planet, secs) => {
  // data given on instructions
  const orbital_periods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }
  const earth_year = 31557600

  return Number((secs / earth_year / orbital_periods[planet]).toFixed(2))
};