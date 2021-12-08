import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
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
