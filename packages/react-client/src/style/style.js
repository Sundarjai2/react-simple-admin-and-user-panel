import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  // Header Style start

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: '#ffffff',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
  },
  logo: {
    width: 290,
    //   height: 70,
  },
  menuLink: {
    margin: theme.spacing(1, 1.5),
    paddingBottom: theme.spacing(1),
    textDecoration: 'none',
    color: '#333'
  },
  activeTab: {
    borderBottom: '1px solid #000 !important',
  },
  signinBtn: {
    background: '#1B75BB',
    color: '#FFFFFF',
    textTransform: "none",
    padding: '4px 20px',
    marginLeft: theme.spacing(1),
    "&:hover": {
      background: "#1B75BB"
    },
  },
  marginBT:{
    margin: theme.spacing(3, 0, 2),
  },
  // Header Style End

  // Signin Style Start
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: '10px 0',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // Signin Style end

  
}));