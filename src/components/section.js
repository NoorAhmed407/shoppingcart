import React, {Component} from 'react';




const SectionItem = (props) =>{

    return(
                <div className="col-md-4">
                        <div class="card text-dark text-center p-5 mb-3">
                            <div class="card-header bg-white">
                                <h3>{props.name}</h3>
                            </div>
                            <div class="card-body">
                            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
                            <h6 className="m-3"> {props.Designation} </h6>
                            </div>
                        </div>
                </div>
    );

}

class Section extends Component {

    state={
         getemployeesData : [
            {id: 1, Name: "Noor Ahmed", Designation: "Web Developer"},
            {id: 2, Name: "Talha Mansoor", Designation: "Mobile Developer"},
            {id: 3, Name: "Abdul Rafay", Designation: "Data Scientist"},
    ]
};

    getComponent = () =>{
        const getComplist = this.state.getemployeesData.map( data =>
        <SectionItem key = {data.id} name= {data.Name} Designation = {data.Designation} />
            ); 

            return getComplist;
    }
    render(){
        return(
                <div className="container-fluid">
                        <h1 className="text-center p-5">First Section Project</h1>
                        <div className="row">
                            {this.getComponent()}
                        </div>
                </div>
        );
    }

}

export default Section;