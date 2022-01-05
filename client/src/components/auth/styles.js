import { blueGrey } from '@mui/material/colors';
import makeStyles  from '@mui/styles/makeStyles';


let useStyles;

export default useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: blueGrey[200]
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: blueGrey[500]
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'black',
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    color: 'black',
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },
  bottomBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noSignin: {
    color: 'black',
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },

  inputTxt: {
    borderColor: blueGrey[800]
  }

  
}));
