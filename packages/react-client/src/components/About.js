import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from './commoncomponent/header';
import Content from './homecomponent/content';
import ContactUs from './homecomponent/contactus';
import Footer from './commoncomponent/footer';

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100%' }} >
                    <Header />
                    <Footer />
                </Typography>
            </React.Fragment>
        );
    }
}

export default (About);
