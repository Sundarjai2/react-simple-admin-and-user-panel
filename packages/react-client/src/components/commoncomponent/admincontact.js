import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Admincontact() {
    // const classes = useStyles();
    return (
        <React.Fragment>
            <Typography component="div" style={{ backgroundColor: '#f5f5f5', height: 'auto', borderBottom: '1px solid #767676', padding: '50px' }} >
            <Typography variant="h5" color="textSecondary" align="center">
                       Please contact admin to verify your profile.
                </Typography>
            </Typography>
        </React.Fragment>
    );
}