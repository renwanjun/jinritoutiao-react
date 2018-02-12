// Greeter.js

import React, {Component} from 'react'
import styles from './header.scss';

// React.Component(ES6)
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            liked:false
        }
        //使用React.Component创建组件，需要通过在constructor中调用super()将props传递给React.Component。另外react 0.13之后props必须是不可变的。
    }
    handleClick(){
        // console.log(this);
    }
    // handleClick=()=>{
    // }
    render() {
        //   console.log(this.props);
        // propTypes: {
        // title: React.PropTypes.string.isRequired,
        // },
        return (
            <div className='header'>
                网易
            </div>
        );
    }
}

Header.propTypes={
    titleProp:React.PropTypes.string
}
Header.defaultProps={
    titleProp:""
}

export default Header