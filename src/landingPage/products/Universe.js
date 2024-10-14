import React from 'react';
import { Link } from 'react-router-dom';


function Universe() {
    return ( 
    <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className="col-4 p-3 mt-5">
              <img src="media/images/zerodhaFundhouse.png" style={{width:"60%"}}/>
              <p className="text-small text-muted">Our asset management venture</p>
            </div>
            <div className="col-4 p-3 mt-5">
              <img src="media/images/smallcaseLogo.png" />
              <p className="text-small text-muted">Thematic investment platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
              <img src="media/images/sensibullLogo.svg"  style={{width:"85%"}}/>
              <p className="text-small text-muted">Options Trading Platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
              <img src="media/images/streakLogo.png" style={{width:"60%"}}/>
              <p className="text-small text-muted">Systematic Trading Platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
              <img src="media/images/dittoLogo.png" style={{width:"53%"}}/>
              <p className="text-small text-muted">Personalized advice on life</p>
            </div>
            <div className="col-4 p-3 mt-5">
              <img src="media/images/smallcaseLogo.png" />
              <p className="text-small text-muted">Thematic investment platform</p>
            </div>
            <Link to={"/signup"}>
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: "20%", margin: "0 auto" }}>Signup Now</button>
            </Link>
        </div>
    </div>
     );
}

export default Universe;