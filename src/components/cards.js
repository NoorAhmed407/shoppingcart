import React, {Component} from 'react';
import './cardstyle.css';

const Card = (props) =>{
    return(
        <div className="col-md-3">
                <div class="shadow p-3 bg-white rounded mt-2">
                    <div className="box p-2">
                        <p>{props.caption}</p>
                        <span className="text-right"><img src="https://img.icons8.com/android/24/000000/right.png" alt="icon" /></span>
                    </div>
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