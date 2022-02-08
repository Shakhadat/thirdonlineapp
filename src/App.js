// import logo from './logo.svg';
import logo from './bootstrap-logo-vector.svg'
import './App.css';

function App() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Company name</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Enterprice</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
       <button className="btn btn-outline-primary">Sign in</button>
      </span>
    </div>
  </div>
</nav>
<div className="section container">
  <div className="row m-5">
    <div className="col-md-12 col-lg-12 col-sm-12">
      <h1 className="title">Pricing</h1>
      <p className="titleText">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>

    </div>
  </div>
  <div className="row cardcollect">
    <div className="col-md-4">
    <div class="card text-center">
  <div class="card-header">
    Free
  </div>
  <div class="card-body">
    <h5 class="card-title">$0 <span className="greytitle"> / mo</span></h5>
    <p class="card-text">10 users included
2 GB of storage
Email support
Help center access</p>
    <a href="#" class="btn btn-outline-primary w-100">Sign up for free</a>
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div class="card text-center">
  <div class="card-header">
    Pro
  </div>
  <div class="card-body">
    <h5 class="card-title">$15 <span className="greytitle"> / mo</span></h5>
    <p class="card-text">20 users included
10 GB of storage
Priority email support
Help center access</p>
    <a href="#" class="btn btn-primary w-100">Get Started</a>
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div class="card text-center">
  <div class="card-header">
    Enterprice
  </div>
  <div class="card-body">
    <h5 class="card-title">$29 <span className="greytitle"> / mo</span></h5>
    <p class="card-text">30 users included
15 GB of storage
Phone and email support
Help center access</p>
    <a href="#" class="btn btn-primary w-100">Contact us</a>
  </div>
</div>
    </div>
  </div>
</div>
<div className="container">
  <div className="footer">
    <div className="row">
      <div className="col-md-3">
        <img src={logo} alt="logo" className="logo" />
        <p className="copy">© 2017-2018</p>
      </div>

      <div className="col-md-3">
        <ul className="footlist">
          <li><b>Features</b></li>
          <li><a href="#">Cool stuff</a></li>
          <li><a href="#">Random feature</a></li>
          <li><a href="#">Team feature</a></li>
          <li><a href="#">Stuff for developers</a></li>
          <li><a href="#">Another one</a></li>
          <li><a href="#">Last time</a></li>
        </ul>
      </div>

      <div className="col-md-3">
        <ul className="footlist">
          <li><b>Resources</b></li>
          <li><a href="#">Resource</a></li>
          <li><a href="#">Resource name</a></li>
          <li><a href="#">Another resource</a></li>
          <li><a href="#">Final resource</a></li>
        </ul>
      </div>

      
      <div className="col-md-3">
        <ul className="footlist">
          <li><b>About</b></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>


    </div>
  </div>
</div>
    </div>
  );
}

export default App;
