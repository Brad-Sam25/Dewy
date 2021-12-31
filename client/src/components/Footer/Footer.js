import React from "react";
import { Box } from "@mui/material";
import useStyles from './styles'


const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.ftr}>
      <Box  >
          Dewy &reg; 2021
      </Box>
    </footer>
  );
};

export default Footer;
