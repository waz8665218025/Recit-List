import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Item extends Component{
    render(){
        console.log(this.props.msg)
        var str=this.props.msg
        const Data = str.map((item,index)=>{
            return (
                <Link to={'/pro/'+index} className='item' key={index}>
                    <img src={item.i} alt=""/>
                    <h5>{item.a}</h5>
                    <b>{item.b}</b>
                    <span>{item.c}</span>
                    <div className="sold">
                    已售
                    <span>{item.d}</span>
                    </div>
               </Link>
            )
        })

            return(
                Data
            )
    }
}

export default Item