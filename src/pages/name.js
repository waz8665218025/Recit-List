import React, { Component } from 'react';

class Name extends Component{

    render(){
        const numbers = [1,2,3,4,5]
        const listData = numbers.map((item,index)=>{
            return (
                <div key={index}>value：{item}， index：{index}</div>
            )
        })
        return (
            <div>
                {listData}
            </div>
        )
    }

}

export default Name