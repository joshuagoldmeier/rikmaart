import React from 'react';
import {Link} from 'react-router'

export default class About extends React.Component {

  	  constructor() {
  	  	super();
	  }


	  render(){

      return (
        <div>
          <div className="col-md-3"> </div>
          <dl className="row  col-md-6">
            <dt className="col-md-3">Our Process:</dt>
            <dd className="col-md-9">
              <p> The process of turning an original idea into embroidery art is a highly specialized one that requires time, skill and experience to be performed well.</p>
              <p> The art of converting an image into embroidery is called "digitizing".  THERE IS NO MAGIC BUTTON that does this with just a click!</p>
              <p> The sequence of each and every stitch is deliberate and "pathed" by hand. Choosing the stitch type, direction each stitch runs and where stitches start and stop are personalized for each design.</p>
              <p> Hebrew FONT embroidery is especially challenging because there does not exist a library of pre-digitized fonts as there does with English fonts. Each and every letter on our personalized items is "digitized" from scratch. </p>
              <p> As master digitizers, we work constantly to improve our technical skills on our state-of-the-art equipment to design and stitch out one-of-a-kind embroidery art.</p>
            </dd>
                        
            <dt className="col-md-3">Our Inspiration: </dt>
            <dd className="col-md-9">
              <p>Rikma Art draws inspiration from the rich textile and costume traditions which flourished amongst the Jews for hundreds of years...</p>
              <p>The Jews of Iraq, Tunisia, Yemen and Morocco in the nineteenth and twentieth century were known to wear sumptuously dyed fabrics, often embellished with elaborate silk embroidery and ornamented with delicate applique work, in honor of festive familial and communal celebrations.</p>
              <p>In dialogue with the legacy of Oriental Jewish costume,  Rikma Art designs utilize a vibrant color palette and feature exquisite embroidery detail.</p>
              <p>We at Rikma Art strive to revitalize and reimagine the paradigm of the Jewish textile arts by infusing modern techniques into age old craft traditions.</p>
              <p>All of our items are hand made to the highest standards.  It is our hope that the beautiful ritual items that we design together will adorn both your personal and religious celebrations.</p>
            </dd>

          </dl>
          <div className="col-md-3"> </div>
        </div>
    );
  }
}
