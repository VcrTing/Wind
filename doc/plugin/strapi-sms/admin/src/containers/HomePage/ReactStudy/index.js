/*
 *
 * HomePage
 *
 */

// import axios from 'axios';

import React, { memo } from 'react';
// import { useGlobalContext } from 'strapi-helper-plugin';

const showTimed = function() {
  // const res = await axios.get('http://127.0.0.1:1337/products')
  
  return '方法内的文字'
}

const SmsConf = () => {

  const title = '组件'
  const body = ' Here is the Plugin Component'

  const list = [
    { txt: 'Name', v: 'VcrTing' }, { txt: 'Name', v: 'Qiong' }
  ]

  return <div>
      <h1>{ title }</h1>
      <p>{ body.toUpperCase() }</p>
      <p>{ strapi.currentLanguage }</p>
      <p className="cr-pri" style={{ color: 'pink', fontSize: '14px' }}>Colorful Text</p>

      <br/>
      <ul>
        { // 这里面只能写 JS 的表达式
          list.map((i, index) => {
            return <li key={index}>{i.txt}: {i.v}</li>
          })
        }
      </ul>
      <p>{ showTimed() }</p>
    </div>;
};

export default memo(SmsConf);
