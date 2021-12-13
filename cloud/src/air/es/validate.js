module.exports = {
  // 空
  val_empty(v, txt) {
    if ((v == null) || (v.trim() == '')) {
      return txt + '必須填寫。'
    }
    return true
  },
  val_char(v, txt) {
    let char = /[`~!@#$%^&*(“”‘’'、～·！—_+|=;？.，。\\)<>?:"{},.\/;'[\]]/;
    if (char.test(v)) {
      return txt + '中不應有特殊字符。'
    }
    return true
  },
  val_char_price(v, txt) {
    let char = /[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},\/;'[\]]/;
    if (char.test(v)) {
      return txt + '中不應有除了.之外的特殊字符。'
    }
    return true
  },
  val_email(v, txt) {
    let char = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!char.test(v)) {
      return txt + '格式錯誤。'
    }
    return true
  },
  val_length(v, txt, min, max) {
    if (v.length < min) {
      return txt + '的字符長度應該大於等於' + min
    }
    if (v.length > max) {
      return txt + '的字符長度應該小於等於' + max
    }
    return true
  },
  val_timed(v, txt, short) {
    if (short) {
      if ((v.length > 10) && (v.length < 8)) {
        return txt + '字符長度不符合！'
      }
      let char = /[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?:"{},.\/;'[\]]/;
      if (char.test(v)) {
        return txt + '中不應有除了 - 之外的特殊字符。'
      }
    }
    return true
  },
  val_phoned(phone, txt) {
    if (!phone | phone == undefined | phone == '') {
        return '電話號碼不為空'
    } else {
        const len = phone.length
        let char = /[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},.\/;'[\]]/;

        if (isNaN(phone)) { return '電話號碼必須要是數字！' }
        if (char.test(phone)) {
            return '號碼不需要特殊字符！！！'
        }
        char = /[abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
        if (char.test(phone)) {
            return '號碼中應不存在a-z以及A-Z的字母！！！'
        }
        if (len != 8) {
            return '港澳地區的電話號碼字數長度應等於8'
        }
    }
    return true
  }
}