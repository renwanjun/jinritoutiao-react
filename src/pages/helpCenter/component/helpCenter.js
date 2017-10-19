/**
 * Created by renwj on 2017/8/2.
 */

import React,{Component} from 'react';
// import { routerRedux } from 'dva/router';
import classnames from 'classnames';
import styles from './helpCenter.css';
// import Head from '../../../common_components/head/head'

class HelpCenter extends Component{
    constructor(props){
        super(props);

        // state初始化
        this.state={
            currentIndex:'',
            panelList:[
                {
                    "head-title":"如何参与 OPPO 双包活动",
                    "content":"活动期间，店员成功办单，且手机型号为 OPPO R11 / R11 Plus，即享受双包奖励（两个红包）"
                },
                {
                    "head-title":"活动到什么时候结束",
                    "content":"本次活动时间是6月15日-6月30日"
                },
                {
                    "head-title":"活动的奖品有哪些",
                    "content":"店员除收到常规红包外，还可额外获得一个活动红包"
                },
                {
                    "head-title":"红包领取失败怎么办",
                    "content":"由所在城市的销售助理收集汇总，并统一提报 OA，进行补发"
                },
                {
                    "head-title":"每个店员可参与活动的次数",
                    "content":"参与次数没有上限，凡店员成功办单，且手机型号为 OPPO R11 / R11 Plus 即可参与此活动"
                },
                {
                    "head-title":"本次活动是在全国范围的吗",
                    "content":"是的"
                },
            ]
        }
        this.getHrefUrl=this.getHrefUrl.bind(this);
        this.itemActive=this.itemActive.bind(this);
    }
    itemActive(index){
        return index === this.state.currentIndex ? true : false;
    }
    getHrefUrl(){
        let url = window.location.href;
        let paramObj = {}
        let param = url.split('?')[1]
  //      console.log(url);
        let hrefUrl='';
        if(param){
            let paramArr = param.split('&');
            for(let i = 0; i<paramArr.length; i++){
                let theParam = paramArr[i].split('=');
                paramObj[theParam[0]] = theParam[1];
            }
                hrefUrl='https://chat3.365webcall.com/chat/chatwin3.aspx?settings=mw7mwXbm0wNPNwz3Aw7bbIz3AIz3A66mmNw' +
            '&memberid=' + paramObj['memberid'] + '&note=' + paramObj['note']
        };
     //   console.log(hrefUrl);
        return hrefUrl;
    }

    render(){
        // this.test();
        return (
            <div className="help-center">
                <div className="header">
                    <div className="left">
                        <div className="block right-border">
                            <a href={this.getHrefUrl()}>
                                <img src="img/help_icon_service@3x.png"/>
                                <span className="discript name">在线客服</span>
                            </a>

                        </div>
                    </div>
                    <div className="right">
                        <div className="block" >
                            <a href="tel:4006551250">
                                <img src="img/help_icon_tel@3x.png"/>
                                <div className="discript-right" >
                                    <div className="name">客服热线</div>
                                    <div className="phone">400-655-1250</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="all_head">常见问题</div>
                    {
                        this.state.panelList.map(function(ele,index){
                            return (
                                <div className="panel" onClick={()=>{this.setState({currentIndex:index})}}>
                                    <div className="head">
                                        <span>{ele["head-title"]}</span>
                                        <img className={classnames({"rotate-icon":this.itemActive(index)})} src="img/icon_smallarrow_down@3x.png"/>
                                    </div>
                                    <div className={classnames("content",{"active":this.itemActive(index)})}>
                                        {ele.content}
                                    </div>
                                </div>
                            )
                        }.bind(this))
                    }
                </div>
            </div>
        )
    }
}

// 组件属性验证
HelpCenter.propTypes={

}
// 组件属性默认值
HelpCenter.defaultProps={

}

export default HelpCenter;
