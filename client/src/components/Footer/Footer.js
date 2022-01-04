import React from "react";
import { Box } from "@mui/material";
import useStyles from './styles'


const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.ftr} sx={{ bottom: 0 }}>
      <Box  >
          Dewy &reg; 2021
      </Box>
    </footer>
  );
};

export default Footer;
