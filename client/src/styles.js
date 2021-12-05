// import {  makeStyles } from '@material-ui/core';
import  { createTheme } from '@material-ui/core';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Bentham', 'serif']
  }
});

const outerTheme = createTheme({
  typography : {
    fontFamily: 'Bentham'
  }
});


// export default makeStyles(() => ({
//     [theme.breakpoints.down('sm')]: {
//         mainContainer: {
//           flexDirection: 'column-reverse',
//         },
//       },
//       appBar: {
//         borderRadius: 15,
//         margin: '30px 0',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       heading: {
//         color: 'rgba(0,183,255, 1)',
//       },
//       image: {
//         marginLeft: '15px',
//       },
// }));

export default outerTheme;