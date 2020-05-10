import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    //state for dishes,comments,promotion,leaders;
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
        
    };
  }

  render() {


    const DishId = ({matches}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(matches.params.dishId,10))[0]}
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(matches.params.dishId,10))} />
      );
    };

   //homepage
    const HomePages = () => {
      return(
        <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
      );
    }
 //clicking on component will open static page
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePages} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishId} />
          <Route path='/aboutus' component={() => <About leader= {this.state.leaders}></About>} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;