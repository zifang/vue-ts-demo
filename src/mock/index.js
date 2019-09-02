import Mock from 'mockjs'
import userAPI from './user'

// 设置mock启用状态
const MockEnable = false;
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
};
// Mock.setup({
//   timeout: '350-600'
// })

if (process.env.NODE_ENV === 'development' && MockEnable) {
  Mock.mock(/\/login/, 'post', userAPI.login);
  Mock.mock(/\/user\/logout/, 'post', userAPI.logout);
  Mock.mock(/\/user\/getUserMenu/, 'get', userAPI.getUserMenu);
}

export default Mock
