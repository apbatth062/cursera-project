import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    formatDate({ date }) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }

 
    renderDish(dishes) {
      
        if (dishes != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                    <CardBody>
                        <CardTitle>{dishes.name}</CardTitle>
                        <CardText>{dishes.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div><h6>there is no detail</h6></div>
            )
        }
    }

    renderComments(cmnt){
      //maping values of comment in list
        if (cmnt != null) {
             
            let list = cmnt.map((cmnt)=>{

            
                let date = cmnt.date
               

                return(
                    <li key={cmnt.id} >
                        <div>
                            <p>{cmnt.comment}</p>
                            <p>--{cmnt.author},{this.formatDate({date})}</p>
                        </div>
                    </li>

                )
            })

            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div><h6>There are no comments</h6></div>
            )
        }
    }

    render(){

       
        const {dishSelect} = this.props;
        console.log(dishSelect);

        return dishSelect?(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dishSelect)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dishSelect.comments)}
                </div>
            </div>
        ):(
            <div></div>
        )
    }

}

export default Dishdetail