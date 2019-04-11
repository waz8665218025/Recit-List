import React, { Component } from 'react';


class Sort extends Component{
    render(){
        return(
          <div className="list_sort">
              <a href="#">
                  <span>销量</span>
                  <div className="list_sort_i">
                      <i className="iconfont icon-up"></i>
                      <i className="iconfont icon-sanjiao"></i>
                  </div>
              </a>
              <a href="#">
                  <span>商品价格</span>
                  <div className="list_sort_i">
                      <i className="iconfont icon-up"></i>
                      <i className="iconfont icon-sanjiao"></i>
                  </div>
              </a>
              <a href="#">
                  <span>上架时间</span>
                  <div className="list_sort_i">
                      <i className="iconfont icon-up"></i>
                      <i className="iconfont icon-sanjiao"></i>
                  </div>
              </a>

          </div>
        );
    }
}

export default Sort