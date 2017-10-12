import React from 'react'
import { FlatButton } from 'material-ui'
import Request from 'superagent'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: false
    }

    this.login = () => {
      this.setState({ success: true }, () => {
        const map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 18
          // center: [121.600913889, 31.1811083333]
        })
        const lnglatXY = [121.600913889, 31.1811083333] // 已知点坐标

        const geocoderCallBack = (data) => {
          const address = data.regeocode.formattedAddress // 返回地址描述
          console.log('address', data.regeocode, address)
          document.getElementById('result').innerHTML = address
        }

        const regeocoder = () => {  // 逆地理编码
          console.log('start regeocoder', geocoder)
          const geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress(lnglatXY, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              geocoderCallBack(result)
            }
          })
          const marker = new AMap.Marker({  // 加点
            map,
            position: lnglatXY
          })
          map.setFitView()
        }
        regeocoder()
      })
    }

    this.getRequest = () => {
      const url = 'http://restapi.amap.com/v3/geocode/regeo?key=a2cd608f27c5a3e85f818216fb3bcac3&location='
      const longitude = 121.6009
      const latitude = 31.1811
      console.log('this.getRequest')
      Request
        .get(`${url}${longitude},${latitude}`)
        .end((error, response, body) => {
          if (response && response.statusCode === 200) {
            document.getElementById('ApiResult').innerHTML = response.text
          } else {
            console.log('error:', error)
            console.log('statusCode:', response.text, response && response.statusCode)
            console.log('body:', body)
          }
        })
    }
  }

  componentWillMount() {
    const script = document.createElement('script')
    script.src = 'http://webapi.amap.com/maps?v=1.3&key=db48eaf98740f0ea550863860b3aab81&plugin=AMap.Geocoder'
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div style={{ width: '100%', textAlign: 'center', fontSize: 34, paddingTop: 24 }}> 测试地图API </div>
        <div style={{ height: 24 }} />
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <FlatButton label="API获取地址" onTouchTap={this.getRequest} />
            <div style={{ height: 300, width: 400 }} id="ApiResult" />
            <FlatButton label="JS获取" onTouchTap={this.login} />
            {
              this.state.success &&
                <div style={{ width: 400, textAlign: 'center' }}>
                  <div style={{ height: 270 }} id="container" />
                  <div style={{ height: 56 }} id="result" />
                  <div style={{ height: 24 }} />
                  <div>
                    高德地图API
                  </div>
                </div>

            }
          </div>
        </div>
      </div>
    )
  }
}

export default Map
