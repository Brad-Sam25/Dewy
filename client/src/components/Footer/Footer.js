import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import useStyles from './styles'


const Footer = () => {
  const classes = useStyles();
  return (
    <Box component='footer' className={classes.ftr}>
      <Typography>
        Dewy
      </Typography>
    </Box>
  );
};

export default Footer;
