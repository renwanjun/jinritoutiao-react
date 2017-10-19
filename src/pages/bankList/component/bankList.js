/**
 * Created by renwj on 2017/8/2.
 */
import React,{Component} from 'react';
import styles from './bankList.css';

class BankList extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <section className="content">
                <div className="head">
                    <div>买单侠目前支持的代扣银行列表</div>
                    <div>若客户银行卡不在银行列表内，会导致代扣失败</div>
                </div>
                <div className="list">
                    <img src="src/assets/bankList/img_banklist.png"/>
                </div>
            </section>
        )
    }
}
export default BankList;