import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Header from './commoncomponent/header';
import Content from './homecomponent/content';
import ContactUs from './homecomponent/contactus';
import Footer from './commoncomponent/footer';
import User from './admincomponent/User';
import Admincontact from './commoncomponent/admincontact';

export default function FixedContainer() {

  const loggedUser = JSON.parse(localStorage.getItem('userLoginData'));
  let setLogin, verifiedUser;
  if (loggedUser == null) {
    setLogin = false;
    verifiedUser = true;
  } else {
    if (loggedUser.role === '1') {
      setLogin = true;
      verifiedUser = true;
    } else {
      if (loggedUser.isAuth === "false" || loggedUser.isAuth === false)
        verifiedUser = false;
      else
        verifiedUser = true;

      setLogin = false;
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100%' }} >
        <Header />
        <div>
          {verifiedUser ? <div>{setLogin ? <User /> : <div><Content /><ContactUs /><Footer /></div>}</div> : <Admincontact />}
        </div>
      </Typography>
    </React.Fragment>
  );
}