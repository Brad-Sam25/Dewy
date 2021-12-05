import { blueGrey, orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: blueGrey[50]
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
