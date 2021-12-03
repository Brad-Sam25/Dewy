import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },
}));













// @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

// .login {
//     width: 100%;
//     max-width: 330px;
//     padding: 60px 16px;
//     margin: auto;
//     height: 100%;
//     box-shadow: 0 7px 10px 0 rgba(0,0,0,0.2);
// }

// .labelTitle {
//     font-family: 'Permanent Marker', cursive;
//     font-size: 50px;
// }
