import React from 'react';
import {Link} from 'react-router'

export default class Products extends React.Component {

  	  constructor() {
  	  	super();
	  }



	  render(){

      var arrForMockData = [1,2,3,4,5,6,7,8,9];

      return (
        <div>
                {
                    arrForMockData.map(value => {
                      return (
                        <div className="card col-md-4" >
                          <img className="card-img-top" src="handmadeTowels.jpg" alt="Card image cap" />
                          <div className="card-block">
                            <h4 className="card-title">Name of Product</h4>
                            <p className="card-text">This area can be used for a brief description of the product and other necessary information</p>
                            <a href="#" className="btn btn-primary">Buy Now!</a>
                          </div>
                        </div>
                      );
                    }
                  )
                }
        </div>
    );
  }
}
