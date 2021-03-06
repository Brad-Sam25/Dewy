import makeStyles  from '@mui/styles/makeStyles';
import { blueGrey, deepPurple } from '@mui/material/colors';

let useStyles;

export default useStyles = makeStyles((theme) => ({
    appBar: {
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: blueGrey[700],
        borderRadius: '10px',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
      heading: {
        color: 'white',
        fontSize: '2em',
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          marginTop: 20,
          justifyContent: 'center',
        },
      },
      logout: {
        marginLeft: '20px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
}))
