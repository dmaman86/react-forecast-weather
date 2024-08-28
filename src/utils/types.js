/**
 *
 * @type {{weather: {rain: string, rainsnow: string,
*                  lightrain: string, oshower: string, clear: string,
*                  ishower: string, humid: string, mcloudy: string,
*                  tsrain: string, cloudy: string, lightsnow: string,
*                  snow: string, pcloudy: string, ts: string},
*          winSpeed: {"1": string, "2": string, "3": string,
*                  "4": string, "5": string, "6": string,
*                  "7": string, "8": string}}}
*/
export const optionsWeather = {
   weather:{
       clear: 'Total cloud cover less than 20%',
       pcloudy: 'Total cloud cover between 20% - 60%',
       mcloudy: 'Total cloud cover between 60% - 80%',
       cloudy: 'Total cloud cover over 80%',
       humid: 'Relative humidity over 90% with total cloud cover less than 60%',
       lightrain: 'Precipitation rate less than 4mm/hr with total cloud cover more than 80%',
       oshower: 'Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%',
       ishower: 'Precipitation rate less than 4mm/hr with total cloud cover less than 60%',
       lightsnow: 'Precipitation rate less than 4mm/hr',
       rain: 'Precipitation rate over 4mm/hr',
       snow: 'Precipitation rate over 4mm/hr',
       rainsnow: 'Precipitation type to be ice pellets or freezing rain',
       ts: 'Lifted Index less than -5',
       tsrain: 'Lifted Index less than -5 with rain'
   },
   winSpeed:{
       1: 'No wind',
       2: '0.3-3.4m/s (light)',
       3: '3.4-8.0m/s (moderate)',
       4: '8.0-10.8m/s (fresh)',
       5: '10.8-17.2m/s (strong)',
       6: '17.2-24.5m/s (gale)',
       7: '24.5-32.6m/s (storm)',
       8: 'Over 32.6m/s (hurricane)'
   }
};