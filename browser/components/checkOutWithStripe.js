import React, {PropTypes} from 'react';
import axios from 'axios'

import {Router, hashHistory, browserHistory} from 'react-router'
  // <script type="text/javascript">
  // Stripe.setPublishableKey('pk_test_ySXpzVzuSziQKkNfPPaWYSBv');

export default class checkOut extends React.Component {

  	  constructor() {
  	  	super();
  	  	this.state = {
  	  		buttonStatus: false
  	  	}

  	  	this.getToken = this.getToken.bind(this);
  	  	this.responseHandler = this.responseHandler.bind(this)
  	  	this.checkOutWithPaypal = this.checkOutWithPaypal.bind(this)

	  }


	  componentDidMount(){
		Stripe.setPublishableKey('pk_test_ySXpzVzuSziQKkNfPPaWYSBv')

        paypal.Button.render({
    
        env: 'sandbox', // Optional: specify 'sandbox' environment
    
        payment: function(resolve, reject) {
               
            var CREATE_PAYMENT_URL = 'http://localhost:8080/api/paypal/create';
                
            paypal.request.post(CREATE_PAYMENT_URL)
                .then(function(data) { 
            		// console.log('hey', data)
            		resolve(data.id); 
                })
                .catch(function(err) { reject(err); });
        },

        onAuthorize: function(data) {
        
            // Note: you can display a confirmation page before executing
            hashHistory.push('/loadingconfirmation')
            var EXECUTE_PAYMENT_URL = 'http://localhost:8080/api/paypal/exec';

            const payload = {
            	paymentID: data.paymentID, 
            	payerID: data.payerID 
            }

            // var EXECUTE_PAYMENT_URL = `https://api.sandbox.paypal.com/v1/payments/payment/${payload.paymentID}/execute`

            paypal.request.post(EXECUTE_PAYMENT_URL, payload)  
            // axios.post(EXECUTE_PAYMENT_URL, payload)
                .then(function(data) { 
                	console.log('great successs!!!!!')
            		/* Go to a success page */ 
            		hashHistory.push('/confirmation')
            	})
                .catch(function(err) { 
                	console.log('ugh an error!!!!')
                	hashHistory.push('/paymenterror')
 					/* Go 	to an error page  */ 
            	});
        }

    }, '#paypal-button');
	  }

	  checkOutWithPaypal(){
	  	
	  }

	  getToken(event){
	  	event.preventDefault();
	  	this.setState({buttonStatus: true})

	  	var temp = this.state.buttonStatus;
	  	console.log(event.currentTarget)
	   	Stripe.card.createToken(event.currentTarget, this.responseHandler)
	  }

	  responseHandler(status, response){
	  	if (response.error) {

	   		} else{
	   			this.setState({buttonStatus: false})
	   			axios.post('/api/pay', {stripeToken: response.id})
	   			console.log(this.state)
      		}
    	}


	  render(){
	  	return(
	  		<div>
				<form onSubmit={event => this.getToken(event)} action="/api/pay" method="POST" id="payment-form">

					  <span className="payment-errors"></span>

					  <div className="form-row">
					    <label>
					      <span>Card Number</span>
					      <input type="text" size="20" data-stripe="number" />
					    </label>
					  </div>

					  <div className="form-row">
					    <label>
					      <span>Expiration (MM/YY)</span>
					      <input type="text" size="2" data-stripe="exp_month" />
					    </label>
					    <span> / </span>
					    <input type="text" size="2" data-stripe="exp_year" />
					  </div>

					  <div className="form-row">
					    <label>
					      <span>CVC</span>
					      <input type="text" size="4" data-stripe="cvc" />
					    </label>
					  </div>

					  <div className="form-row">
					    <label>
					      <span>Billing ZIP Code</span>
					      <input type="text" size="6" data-stripe="address_zip" />
					    </label>
					  </div>

					  <input type="submit" className="submit" value="Submit Payment" disabled={this.state.buttonStatus ? 'disabled' : ''}/>

					</form>

					<div id="paypal-button"></div>

					

			</div>
	  		)

		}


}



// export default checkOut
