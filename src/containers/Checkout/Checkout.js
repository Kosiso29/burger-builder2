import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from "react-redux";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
// import * as actions from "../../store/actions";

class Checkout extends Component {
    // state={
    //     ingredients: {
    //         meat: 0,
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0
    //     },
    //     totalPrice: 0
    // }

    // componentWillMount () {
    //     this.props.onInitPurchase();
    // }

    // componentDidMount () {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         // ['salad', '1']
    //         if(param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }            
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.props.price} {...props} />)} />
                    component={ContactData} />
                </div>
            );
        }
        return summary;
    }

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(actions.purchaseInit())
//     }
// }

export default connect(mapStateToProps)(Checkout);