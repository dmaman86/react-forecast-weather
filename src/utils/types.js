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
   icons: {
        clear: '☀️',
        pcloudy: '⛅️',  
        mcloudy: '🌥',  
        cloudy: '☁️',
        humid: '💧',  
        lightrain: '🌦',  
        oshower: '🌦',  
        ishower: '🌦',  
        lightsnow: '🌨', 
        rain: '🌧',
        snow: '❄️',
        rainsnow: '🌨',  
        ts: '⛈',  
        tsrain: '⛈🌧',
        wind: '💨'
   },
   winSpeed:{
        1: 'No wind',
        2: '1.1-12.2 km/h (light)',         
        3: '12.2-28.8 km/h (moderate)',      
        4: '28.8-38.9 km/h (fresh)',         
        5: '38.9-61.9 km/h (strong)',        
        6: '61.9-88.2 km/h (gale)',          
        7: '88.2-117.4 km/h (storm)',        
        8: 'Over 117.4 km/h (hurricane)'     
   }
};