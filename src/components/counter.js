import React, { Component } from "react";


class Counter extends Component{
    state = {
        count : this.props.value,
    };


     btnincClick = () =>{
        this.setState({ count: this.state.count +1});
        if(this.state.count >= 20){
            alert("More than 20 items are not Allowed");
            this.setState({count: 20});
        }
    }
    btndecClick = () =>{
        this.setState({count: this.state.count -1});
        if (this.state.count <= 0){
            this.setState({count: 0});
        }
    }

   
    getbadgeClasses = () =>{
        let badgeClasses = "badge m-2 badge-";
        badgeClasses += this.state.count ===0 ? "warning" : "primary";
        return badgeClasses;
    }

    getBadgevalue = () =>{
        const badgeValue = this.state.count === 0 ? "Zero" : this.state.count;
        return badgeValue;
    }

   
    render(){
        return(
            <div className="container">
                {this.props.children}
                <h1 className={this.getbadgeClasses()}>{this.getBadgevalue()}</h1>
                <button onClick={this.btnincClick} className="btn btn-success">+</button>
                <button onClick={this.btndecClick} className="btn m-3 btn-secondary">-</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn m-2 btn-danger">Delete</button>
            </div>
        );
    }

 
}

export default Counter;
