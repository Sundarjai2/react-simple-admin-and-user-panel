import { makeStyles } from '@material-ui/core/styles';
import socialImg from '../image/social-sprites.png';

export const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: '#347dc8',
        fontSize: '20px',

        "&:hover": {
            textDecoration: 'none',
        },
    },
    privacyPolicy: {
        "&:hover": {
            textDecoration: 'none',
        }
    },
    allPolicy: {
        "&:hover": {
            textDecoration: 'none',
        }
    },
    footer: {
        // borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(0),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    Twitter: {
        display: 'block',
        width: '35px',
        height: '35px',
        borderBottom: 'none',
        backgroundImage: `url(${socialImg})`,
        backgroundPosition: '1px -70px',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        float: 'left',
    },
    Linkedin: {
        display: 'block',
        width: '35px',
        height: '35px',
        borderBottom: 'none',
        backgroundImage: `url(${socialImg})`,
        backgroundPosition: '1px -35px',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        float: 'left',
    },
    socialGrid: {
        width: '70px',
    }
}));