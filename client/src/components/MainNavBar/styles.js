import { makeStyles } from '@material-ui/core';
import { blueGrey, deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: blueGrey[700],
        borderRadius: '80px',
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
