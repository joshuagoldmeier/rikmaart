import React from 'react';
import {Link} from 'react-router'

export default class Contact extends React.Component {

  	  constructor() {
  	  	super();
	  }


	  render(){

      return (
        <div className="text-center">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img src="https://static.wixstatic.com/media/bf733c_6904860b1de342eeb7bc3b2afad19ffc.png/v1/fill/w_534,h_391,al_c,usm_0.66_1.00_0.01/bf733c_6904860b1de342eeb7bc3b2afad19ffc.png"/>
          </div>
          <div className="col-md-4">
            <h1 className="display-1">Lets Talk!</h1>
            <div className="col-md-6">
              <h2 className="display-2">Barbara Ast</h2>
              <h4 className="display-4">Tel: 314-863-9327</h4>
            </div>
            <div className="col-md-6">
              <h2 className="display-2">Bonnie Goldmeier</h2>
              <h4 className="display-4">Tel: 314-503-2792</h4>
            </div>
            <h2>Email: rikma.art@gmail.com</h2>
            <p>We are a small company based in St. Louis, Missouri. We ship all over the world.</p>
            <p>Each of our pieces are one of a kind and made lovingly by hand.  Our designs are constantly evolving and we are happy to turn your ideas into works of art.  Feel free to call or email us to discuss your commission.</p>


          </div>
          <div className="col-md-2"></div>
        </div>
    );
  }
}
