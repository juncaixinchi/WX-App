import React from 'react'
import { Toggle, TextField, FlatButton } from 'material-ui'

class Word extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: false
    }

    this.login = () => {
      this.setState({ login: true }, () => {
        const wxArgs = new WxLogin({
          id: 'login_container',
          appid: 'wx99b54eb728323fe8',
          scope: 'snsapi_login',
          redirect_uri: 'www.wisnuc.com',
          state: 'uuid',
          style: '',
          href: ''
        })
      })
    }
  }

  componentWillMount() {
    const script = document.createElement('script')
    script.src = 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    console.log(this.state)
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div style={{ width: '100%', textAlign: 'center', fontSize: 34, paddingTop: 24 }}> 微信登陆 </div>
        <div style={{ height: 24 }} />
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            !this.state.login
            ? <FlatButton
              label="登录"
              onTouchTap={this.login}
            />
            :
            <div style={{ width: 400, textAlign: 'center' }}>
              <div style={{ height: 270 }} id="login_container" />
              <div style={{ height: 24 }} />
              <div>
              使用手机微信扫码登录
            </div>
            </div>

          }
        </div>
      </div>
    )
  }
}

export default Word
