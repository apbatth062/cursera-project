import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay} from "reactstrap";
import Dishdetail from "./DishdetailComponent";

class Menu extends Component {

 //added props
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    
    OnDishSelect(dishes){
        
        this.setState({selectedDish:dishes})
    }


    render(){
    //storing details in menu
        const menu = this.props.dishes.map((dishes) =>{
            return(
                <div key={dishes.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.OnDishSelect(dishes)} >

                        <CardImg width="100%" src={dishes.image} alt={dishes.name} />

                        <CardImgOverlay>
                            <CardTitle>{dishes.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
     //returning the required output
        return(
            <div className="container">

                <div className="row">
                    {menu}
                </div>

                <Dishdetail dishSelect={this.state.selectedDish}></Dishdetail>


            </div>
        );
    }
}

export default Menu;