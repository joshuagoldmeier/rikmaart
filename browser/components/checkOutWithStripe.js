import React from 'react';
import axios from 'axios'
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

        paypal.use( ['login'], function (login) {
          login.render ({
            "appid":"xxx",
            "authend":"sandbox",
            "scopes":"openid",
            "containerid":"lippButton",
            "locale":"en-us",
            "returnurl":"http://localhost:8080/api/paypal"
          })
        })
 

	  }

	  checkOutWithPaypal(){
	  	paypal.use( ['login'], function (login) {
		  login.render ({
		    "appid":"Ae5y5mFfQ0Y9kK690MWIXQfe57s0rtKgi82ptIL-t9asvNTlW226WvwqszqH33iLpmuiUcp6GX36FpNI",
		    "authend":"sandbox",
		    "scopes":"openid",
		    "containerid":"lippButton",
		    "locale":"en-us",
		    "returnurl":"/api/paypal"
		  });
		});
	  	// axios.get('/api/paypal')
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

					<div>
						<span id='lippButton'>  </span>

					</div>


			</div>
	  		)

		}


}



// export default checkOut
