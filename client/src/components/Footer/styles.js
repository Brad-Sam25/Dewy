import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

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