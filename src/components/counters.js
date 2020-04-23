import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component{

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
            {id: 6, value: 0},
            {id: 7, value: 0}
        ]
}


getCouner =  () =>{
        const getCounterComponent=this.state.counters.map(counter => 
        <Counter 
        key={counter.id} 
        onDelete={this.handleDelete} 
        id={counter.id} 
        value ={counter.value}
        >
            <h4>Item Number: {counter.id}</h4>
      </Counter> );
   return(getCounterComponent);
}

handleDelete = (counterID) =>{

const counters = this.state.counters.filter(c => c.id !==counterID);
this.setState({counters})     

}



    render(){
        return (
            <div>
                { this.getCouner()}
            </div>
        );
    }
}


export default Counters;