import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  return (
    <main>
      <div>
        <Container maxWidth="sm" align="center" style={{ marginTop: "110px" }}>
          <Typography variant="h2" color="textPrimary" gutterBottom>
            Find out your skin's true potential
          </Typography>
          <Link to="/quiz" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={classes.btn} size="large">
              Take The Skin Quiz
            </Button>
          </Link>
        </Container>
      </div>
    </main>
  );
};

export default Home;
