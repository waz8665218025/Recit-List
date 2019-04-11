import React, { Component } from 'react';

import Header from '../components/header'
import Sort from '../components/sort'
import Item from '../components/item'

class List extends Component{

    constructor(props){
        super(props)
        this.state={
            str:[
                {
                    "i":'img/1.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥158',
                    "c":'APP9折优惠价:￥14299',
                    "d":'108'
                },
                {
                    "i":'img/2.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥288',
                    "c":'APP9折优惠价:￥14299',
                    "d":'188'
                },
                {
                    "i":'img/3.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥688',
                    "c":'APP9折优惠价:￥14299',
                    "d":'588'
                },
                {
                    "i":'img/4.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥15888',
                    "c":'APP9折优惠价:￥14299',
                    "d":'10988'
                },
                {
                    "i":'img/5.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥568',
                    "c":'APP9折优惠价:￥14299',
                    "d":'488'
                },
                {
                    "i":'img/6.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥3504',
                    "c":'APP9折优惠价:￥14299',
                    "d":'10988'
                },
                {
                    "i":'img/7.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥1826',
                    "c":'APP9折优惠价:￥14299',
                    "d":'1088'
                },
                {
                    "i":'img/8.jpg',
                    "a":'梦中的依恋-999朵...',
                    "b":'￥2538',
                    "c":'APP9折优惠价:￥14299',
                    "d":'1098'
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Header />
                <Sort />
                <div className="list">
                    <Item msg={this.state.str}/>
                </div>
            </div>
        )
    }
}

export default List