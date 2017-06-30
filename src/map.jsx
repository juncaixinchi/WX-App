import React from 'react'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: false
    }

    this.fire = () => {
      this.setState({ success: true }, () => {
        const map = new AMap.Map('mapContainer', {
          resizeEnable: true,
          zoom: 18
        })

        const lnglatXY = [this.props.longitude, this.props.latitude] // 已知点坐标

        const geocoderCallBack = (data) => {
          const address = data.regeocode.formattedAddress // 返回地址描述
          console.log('address', data.regeocode, address)
          if (this.props.resultId) document.getElementById(this.props.resultId).innerHTML = address
        }

        const regeocoder = () => {  // 逆地理编码
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
  }

  componentWillMount() {
    const script = document.createElement('script')
    script.src = 'http://webapi.amap.com/maps?v=1.3&key=db48eaf98740f0ea550863860b3aab81&plugin=AMap.Geocoder'
    script.async = true
    script.onload = this.fire
    document.body.appendChild(script)
  }

  render() {
    const height = this.props.height || 240
    const width = this.props.height || 240
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {
          this.state.success &&
            <divi style={{ height, width }} id="mapContainer" />
        }
      </div>
    )
  }
}

export default Map
