import React from "react";
import Box  from "@mui/material/Box";
import useStyles from './styles'


const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.ftr} style={{ top:'auto', bottom: 0, justifyContent: 'center', height: '20px'}}>
      <Box  >
          Dewy &reg; 2021
      </Box>
    </footer>
  );
};

export default Footer;
