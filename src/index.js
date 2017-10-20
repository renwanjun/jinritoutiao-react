/*
* index.js程序入口
* Redux提供createStore用来生成Store,Store就是保存数据的地方，可以将它看做一个容器，整个应用只能有一个Store
*/

// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

//Redux
import {createStore} from 'redux';

function counter(state=0,action){
    switch(action.type){
        case 'INCREMENT':
         return state+1;
        case 'DECREMENT':
         return state-1;
        default:
          return state 
    }
}
let store=createStore(counter);
store.subscribe( ()=>
  console.log(store.getState())
);
store.dispatch({type:'INCREMENT'});

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';


//CSS
import './css/main.scss';  //使用require导入css文件
//  class -> className ; for ->htmlFor
render(<Greeter name="greeter" >
    {/*<span>hello</span>*/}
</Greeter>, document.getElementById('root'));

