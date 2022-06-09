import React from 'react';
import './Register.css';

const Register = ({onRouteChange}) => {
  return(
    <article className="br3 ba ma2 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-3">
      <main className="pa4 white ">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 white">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div class="">
            <input
              className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          <div class="lh-copy mt3">
            <p onClick={()=>onRouteChange('signin')} class="f6 link dim black db white pointer">Already have an account? Sign In here.</p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Register;
