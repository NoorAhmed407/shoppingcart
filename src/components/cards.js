import React, {Component} from 'react';
import './cardstyle.css';

const Card = () =>{
    return(
        <div className="col-md-3">
                <div class="shadow p-3 bg-white rounded mt-2">
                    <div className="box p-2"><p> Color of The Years</p></div>
                </div>
        </div>
    );
}


class Cards extends Component{

    render(){
        return(
            <div className="container-fluid">
                
            </div>

        );
    }

}

export default Card;