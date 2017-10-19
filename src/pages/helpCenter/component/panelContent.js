import React,{Component} from 'react';
import classnames from 'classnames';
import styles from './helpCenter.css';

class PanelContent extends Comment{
    constructor(){

    }

    render(){
        return (
            <div className="panel">
                <div className="head">
                    <span>活动的奖品有哪些</span>
                    <img className={classnames({"rotate-icon":true})} src="img/icon_smallarrow_down@3x.png"/>
                </div>
                <div className="content">
                        店员除收到常规红包外，还可额外获得一个活动红包
                </div>
            </div>
        )
    }
}