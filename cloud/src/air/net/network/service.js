import { net } from '../api/net.js'
import conn_util from './for_conn_util'

import auth from '../auth/token';

const get = function(url, token, condition = {}) {
  console.log(url[0] + conn_util.builParam(condition))
  return net({
    url: url[0] + conn_util.builParam(condition),
    method: 'get',
    headers: conn_util.headers(token)
  })
}

const post = function(url, token, data) {
  return net({
    url: url[0],
    method: 'post',
    data,
    headers: conn_util.headers(token)
  })
}

const put = function(url, token, data) {
  return net({
    url: url[0],
    method: 'put',
    data,
    headers: conn_util.headers(token)
  })
}

export default {
  get,
  put,
  post,

  token: auth.token
}