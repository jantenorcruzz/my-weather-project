import clearSky from './assets/images/clear-sky.png'
import brokenClouds from './assets/images/broken-clouds.png'
import fewClouds from './assets/images/few clouds.png'
import mist from './assets/images/mist.png'
import rain from './assets/images/rain.png'
import scatteredClouds from './assets/images/scattered clouds.png'
import showerRain from './assets/images/shower rain.png'
import snow from './assets/images/snow.png'
import thunderstorm from './assets/images/thunderstorm.png'


const weatherData = [
    { name: '01', icon: clearSky, color: 'sky' },
    { name: '02', icon: fewClouds, color: 'cyan' },
    { name: '03', icon: scatteredClouds, color: 'fuchsia' },
    { name: '04', icon: brokenClouds, color: 'pink' },
    { name: '09', icon: showerRain, color: 'violet' },
    { name: '10', icon: rain, color: 'purple' },
    { name: '11', icon: thunderstorm, color: 'indigo' },
    { name: '13', icon: snow, color: 'blue' },
    { name: '50', icon: mist, color: 'teal' },
]

export default weatherData;