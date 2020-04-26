import React, {Component} from 'react';
import './cardstyle.css';

const Card = (props) =>{
    return(
        <div className="col-md-3">
                <div class="shadow p-3 bg-white rounded mt-2">
                    <div className="box p-1">
                        <p className="font-b">{props.caption}</p>
                        <span className="float-right p-3"><img src="https://img.icons8.com/android/24/000000/right.png" alt="icon" /></span>
                    </div>
                </div>
        </div>
    );
}


class Cards extends Component{

    state={
        cardData: [
            {id:1, Caption: "Dulux Colour of the year 2020"},
            {id:2, Caption: "Expert Help for Tips and Tricks"},
            {id:3, Caption: "The Right Products For the Job"},
            {id:4, Caption: "Find a Store near you."}
        ]
    }

    getcardData = () =>{
       const getData =   this.state.cardData.map(data=> <Card key={data.id} caption={data.Caption} />); 
       return getData;      
    }


    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                {this.getcardData()}
                </div>
            </div>

        );
    }

}

export default Cards;