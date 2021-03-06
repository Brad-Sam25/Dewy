import React from "react";
import { Button, Container, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  return (
        <Container maxWidth="sm" align="center" style={{ marginTop: "110px" }} component='main'>
          <Typography variant="h2" color="textPrimary" gutterBottom>
            Find out your skin's true potential
          </Typography>
          <Link to="/quiz" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={classes.btn} size="large">
              Take The Skin Quiz
            </Button>
          </Link>
        </Container>
  );
};

export default Home;
