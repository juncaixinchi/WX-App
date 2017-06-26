import React from 'react'
import { Toggle, TextField, FlatButton } from 'material-ui'

class Upload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: false
    }
    this.imgPreview = (fileDom) => {
      console.log(fileDom.files)
      let reader
      if (window.FileReader) {
        reader = new FileReader()
      } else {
        alert('你的设备不支持上传图片')
      }

      const file = fileDom.files[0]
      const imageType = /^image\//g

      if (!imageType.test(file.type)) {
        alert('请上传一张图片！')
        return
      }

      reader.onload = function (e) {
        const img = document.getElementById('preview')
        const img2 = document.getElementById('rect')
        const img3 = document.getElementById('circle')
        img.src = e.target.result
        img2.src = e.target.result
        img3.src = e.target.result
      }

      reader.readAsDataURL(file)

      this.setState({ image: true })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div style={{ width: '100%', textAlign: 'center', fontSize: 34, paddingTop: 24 }}> 上传图片 </div>
        <div style={{ height: 24 }} />
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <input
              type="file"
              name="file"
              onChange={e => this.imgPreview(e.target)}
            />
            {
              this.state.image &&
                <div>
                  <div style={{ height: 24 }} />
                  <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <div style={{ height: 180, width: 240, position: 'relative' }}>
                      <div style={{ height: 180, width: 240, position: 'absolute', left: 0, top: 0 }}>
                        <img alt="preview" id="preview" height={180} width={240} style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ height: 180, width: 30, position: 'absolute', backgroundColor: 'rgba(255,255,255,0.54)' }} />
                      <div style={{ height: 180, width: 30, position: 'absolute', left: 210, backgroundColor: 'rgba(255,255,255,0.54)' }} />
                    </div>
                    <div style={{ width: 270 }}>
                      <img alt="preview" id="rect" height={270} />
                    </div>
                    <div style={{ margin: 24, borderRadius: 135, width: 270, height: 270, overflow: 'hidden' }} >
                      <img alt="preview" id="circle" height={270} />
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
