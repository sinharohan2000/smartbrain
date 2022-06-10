import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail : event.target.value});
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword : event.target.value});
  }
  onSubmitSignIn = () => {
    // console.log(this.state);
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data === 'Success!'){
          this.props.onRouteChange('home');
        }
      })
  }

  render(){
    return(
      <article className="br3 ba ma2 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-3">
        <main className="pa4 white ">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0 white">Sign-In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange = {this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="white b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange = {this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={()=>this.props.onRouteChange('register')} className="pointer f6 link dim black db white">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
