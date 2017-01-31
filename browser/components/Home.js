import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    const divStyle = {"textAlign": "center"}

    return (
      <div>
        <div style={divStyle}>
          <h5>Rikma Art is your source for embroidered art.</h5>
          <h5>Our vibrant fabrics & textures layered with embroidery put a Twist on tradition.</h5>
          <h5>Choose from our store or design a custom order item with us.</h5>
          <ul>Challah Cover</ul>
          <ul>Custom Atarot</ul>
          <ul>Tallit & Tefillin Bag</ul>
          <ul>Family Tree</ul>
          <ul>Heirloom Chuppah</ul>
          <ul>Netilat Yadayim Towels</ul>
          <h5>We stretch the boundaries of traditional Jewish art.</h5>
        </div>

        <div className="text-center">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="item carousel-item active">
                <img src="handmadeTowels.jpg" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>TITLE</h3>
                  <p>description</p>
                </div>
              </div>
              <div className="item carousel-item">
                <img src="handmadeTowels.jpg" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>TITLE</h3>
                  <p>description</p>
                </div>
              </div>
              <div className="item carousel-item">
                <img src="handmadeTowels.jpg" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>TITLE</h3>
                  <p>description</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <img src="https://static.wixstatic.com/media/bf733c_1059ff8beca14871abd1f4de90be8a85.png/v1/fill/w_420,h_311,al_c,usm_0.66_1.00_0.01/bf733c_1059ff8beca14871abd1f4de90be8a85.png"/>
          </div>
          <div className="col-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea">Example textarea</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>



      </div>
    );
  }
}


export default Home;
