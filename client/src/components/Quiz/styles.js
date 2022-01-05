import { blueGrey } from "@mui/material/colors";
import makeStyles  from '@mui/styles/makeStyles';

export const useStyles = makeStyles({
    qNum: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '30px 0px 100px 0px'
    },
    questionBox: {
        marginBottom: '50px'
    },

    optionBtn: {
        backgroundColor: blueGrey[400],
        "&:focus": {
            backgroundColor: blueGrey[800]
        },
        "&:hover": {
            backgroundColor: blueGrey[200]
        }
    },
    btnBox:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    traverseBtn: {
        backgroundColor: "black",
        color: "whitesmoke",
        "&:hover": {
            backgroundColor:"grey",
            borderColor:"black"
        },
        width:"25%",
        marginTop:"50px",
        borderColor:"black"
    },
    resultsBtn: {
        backgroundColor: "black",
        color: "whitesmoke",
        "&:hover": {
            backgroundColor:"green",
            borderColor:"green"
        },
        width:"25%",
        marginTop:"50px",
        borderColor:"green"
    },
})