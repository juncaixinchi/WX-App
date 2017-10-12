const geocoder = require('geocoder')

const latScale = [3, 54]
const lngScale = [72, 136]
const geoData = []
for (let i = latScale[0]; i <= latScale[1]; i += 1) {
  for (let j = lngScale[0]; j <= lngScale[1]; j += 1) {
    geocoder.reverseGeocode(i, j, (err, data) => {
      if (err) {
        // console.log(err)
      } else {
        // console.log(data.results)
        geoData.push({ lat: i, lng: j, geo: data.results })
        if (j = 136) console.log(geoData)
      }
    }, { language: 'zh-CN' })
  }
}

