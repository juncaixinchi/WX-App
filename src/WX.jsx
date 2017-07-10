import React from 'react'
import { Toggle, TextField, FlatButton } from 'material-ui'


const wxlogin = function (a, b, c) {
  let wxiframe
  function d(a) {
    let c = 'default'
    a.self_redirect === !0 ? c = 'true' : a.self_redirect === !1 && (c = 'false')
    const d = b.createElement('iframe')
    wxiframe= d
    let e = `https://open.weixin.qq.com/connect/qrconnect?appid=${a.appid}&scope=${a.scope}&redirect_uri=${a.redirect_uri}&state=${a.state}&login_type=jssdk&self_redirect=${c}`;
    e += a.style ? `&style=${a.style}` : ''
    e += a.href ? `&href=${a.href}` : ''
    d.src = e
    d.frameBorder = '0'
    d.allowTransparency = 'true'
    d.scrolling = 'no'
    d.width = '300px'
    d.height = '400px'
    const f = b.getElementById(a.id);
    f.innerHTML = ''
    f.appendChild(d)
  }
  a.WxLogin = d
  a.onbeforeunload = function(e){
    if (wxiframe && wxiframe.contentWindow.wx_code) {
      alert(wxiframe.contentWindow.wx_code)
      wxiframe.contentWindow.wx_code = null
      return false; // This will stop the redirecting.
    }
    return null
  }
}

wxlogin(window, document)

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
          appid: 'wxd7e08af781bea6a2',
          scope: 'snsapi_login',
          redirect_uri: 'http%3A%2F%2Fwxlogin.siyouqun.com',
          state: 'uuid',
          style: '',
          href: ''
        })
      })
    }
  }

  componentWillMount() {
    const script = document.createElement('script')
    script.src = '../src/reswx.js'
    // script.src = 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
    script.async = true
    // document.body.appendChild(script)
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
            <div style={{ width: 400, height: 400, textAlign: 'center' }}>
              <div style={{ height: 270 }} id="login_container" />
              <div style={{ height: 128 }} />
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
