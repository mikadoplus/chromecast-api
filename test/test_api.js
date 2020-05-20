var ChromecastAPI = require('../index.js')

var client = new ChromecastAPI()

var debug = true

var media = {
  url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4'
}

console.log('Looking for devices')

client.on('device', function (device) {
  console.log('Found device: ', device)
  console.log('Total devices found: ', client.devices)
  if (!debug) {
    device.play(media, function (status) {
      console.log('Playing media with status:' + status)
    })
  }
})
