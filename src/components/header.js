import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="list_header">
                <div className="list_hea_left">
                    <i className="iconfont icon-kefuweixuanzhong list_i"></i>
                    <i className="iconfont icon-fanhui list_i1"></i>
                </div>
                <h2 className="list_hea_h2">生日鲜花</h2>
                <div className="list_hea_right">
                    <i className="iconfont icon-sousuo list_i2"></i>
                    <i className="iconfont icon-daohanggouwuche list_i3"></i>
                </div>
            </div>

        );
    }
}

export default Header