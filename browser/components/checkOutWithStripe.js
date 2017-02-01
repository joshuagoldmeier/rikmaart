import React from 'react';
import axios from 'axios'


export default class checkOut extends React.Component {

  	  constructor() {
  	  	super();

  	  	this.getToken = this.getToken.bind(this)
	  }


	  getToken(event){
	  	event.preventDefault();

	  	function stripeResponseHandler(status, response) {
		  // Grab the form:
		  var $form = $('#payment-form');

		  if (response.error) { // Problem!

		    // Show the errors on the form:
		    $form.find('.payment-errors').text(response.error.message);
		    $form.find('.submit').prop('disabled', false); // Re-enable submission

		  } else { // Token was created!

		  	console.log('before token')
		    // Get the token ID:
		    var token = response.id;

		    console.log('after token')
		    // axios.post('/pay', {token: token})
		    // Insert the token ID into the form so it gets submitted to the server:
		    $form.append($('<input type="hidden" name="stripeToken">').val(token));

		    // Submit the form:
		    $form.get(0).submit();

		    console.log('after form submission')
		  }
		};

	  	$(function() {
		  var $form = $('#payment-form');
		  $form.submit(function(event) {
		    // Disable the submit button to prevent repeated clicks:
		    $form.find('.submit').prop('disabled', true);

		    // Request a token from Stripe:
		    Stripe.card.createToken($form, stripeResponseHandler);

		    // Prevent the form from being submitted:
		    return false;
		  });
		});



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

					  <input type="submit" className="submit" value="Submit Payment" /> 

					</form>


			</div>
	  		)

		}


}



// export default checkOut