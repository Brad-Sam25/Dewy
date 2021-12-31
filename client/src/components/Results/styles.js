import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  resultBox: {
    marginBottom: "50px",
  },
  avtr: {
    height: "56px",
    width: "56px",
    backgroundColor: "teal",
  },
  imgSize: {
    objectFit: "contain",
    height: "500px",
    width: "100%"
  },
  linkContainer: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  buyLink:{
    textDecoration:'none',
    borderBottom: '2px solid #ef8b80',
    boxShadow: 'inset 0 -4px 0 #ef8b80',
    color: 'rgba(35, 35, 35, 0.8)',
    transition: 'background 0.1s cubic-bezier(.33,.66,.66,1)',
      '&:hover': {
        background: '#ef8b80'
      }
  }
});
