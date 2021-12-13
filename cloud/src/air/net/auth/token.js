
import conf from '@/conf'

import axios from 'axios'

const url = conf.apiURL + '/auth/local'

const token = async function(username, password) {
  let res = {
    identifier: username,
    password: password,
  }

  res = await axios.post(url, res)
  return res.data
}

// 400 密码错误

export default {
  token
}