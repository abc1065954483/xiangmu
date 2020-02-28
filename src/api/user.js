import axios from '@/untils/myaxios.js'

// 1,登录
export const userlogin = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
// 2,用户详情
export const getuserinfo = (id) => {
  return axios({
    // 需要Authorization 授权验证，就是token的验证
    // headers: {
    //   Authorization: localStorage.getItem('mytoken')
    // },
    url: `/user/${id}` // 这个参数是路由参数，直接在url这里写，不用pramas

  })
}
