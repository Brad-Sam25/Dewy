import makeStyles  from '@mui/styles/makeStyles';
import { blueGrey } from "@mui/material/colors";

export default makeStyles({
    ftr: {
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        position:"fixed",
        left:"0",
        bottom:"0",
        right:"0",
        backgroundColor: blueGrey[900],
        color:"white"
    },
    innerFtr: {
        minHeight: "100%"
    }
});