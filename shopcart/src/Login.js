import React, { useState }from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function Login () {
  const [login, setLogin] = useState(false); //set up login
  const [data, setData] = useState({}); //set up fb data
  const [picture, setPicture] = useState(''); //set up fb profile image

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }


  return(
    <div class="container">
      <Card style={{width:'800px'}} className="mx-auto mt-5">
          {!login && (
          <React.Fragment>
          <Card.Header className="pb-4">
          <h1>Sign in</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {!login &&
            <React.Fragment>
            <h3>Please login using one of the following:</h3>
            {/* Login Form */}
            <LoginForm />
            {/* FB Login Button */}
            <FacebookLogin
              appId="330701202200283"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
            >
            </FacebookLogin>
            </React.Fragment>
            }
          </Card.Text>
        </Card.Body>
        </React.Fragment>
        )}
        
        {login && (
            <React.Fragment>
                  <Card.Header className="pb-4">
                      <h1>Check Out</h1>
                  </Card.Header>
                  <Card.Body>
                      <Card.Text>
                          <Checked fbpic={picture} fbdata={data} />
                      </Card.Text>
                  </Card.Body>
              </React.Fragment>
        )
                
            }

      </Card>
    </div>
  )
}

function LoginForm() {
  return(
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label><br />
      <input type="text" name="name" placeholder="Your name"></input><br />
      <label className="m-2">Email:</label><br />
      <input type="email" name="email" placeholder="Your Email"></input><br />
      <input type="submit" value="Login" className="btn bg-success text-white my-3"></input>
    </form>
  )
}

function Checked({fbpic, fbdata}) {
  return(
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <p className="my-5">Time to check out?</p>
    </React.Fragment>
  )
}

export default Login;