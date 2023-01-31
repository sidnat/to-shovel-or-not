// Determines if shoveling or salting is required for the given weather.
// -1 = invalid inputs
// 0 = do nothing
// 1 = shovel
// 2 = salt
// 3 = salt & shovel
export default function determineOutcome(weathers) {
  if (weathers.length < 2) return -1

  const rain = weathers[0].total_rain;
  const snow = weathers[0].total_snow;
  const nextLow = weathers[1].low;
  
  const shovel = snow >= 30 || (snow > 0 && snow < 30 && nextLow <= 0);
  const salt = rain > 0 && nextLow <= 0

  if (shovel && salt) return 3
  else if (shovel) return 1
  else if (salt) return 2
  else return 0
}