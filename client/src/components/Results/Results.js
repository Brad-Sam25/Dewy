import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useStyles } from "./styles";
import { blue } from "@mui/material/colors";
import ScienceIcon from "@mui/icons-material/Science";
import {
  prompt1T,
  prompt1M,
  prompt1D,
  prompt2T,
  prompt2M,
  prompt2D,
  prompt3T,
  prompt3M,
  prompt3D,
  prompt4T,
  prompt4M,
  prompt4D,
  prompt5T,
  prompt5M,
  prompt5D,
} from "../../helpers/ResultLogic";
import { useSelector } from "react-redux";

const Results = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.questionReducer);
  console.log(state);
  return (
    <Container align="center">
      <Box className={classes.resultBox}>
        <Typography variant="h2">Your Results</Typography>
        <Avatar variant="rounded" className={classes.avtr}>
          <ScienceIcon />
        </Avatar>
      </Box>
      <Box
        component="main"
        display="grid"
        gridTemplateRows="repeat(5, 1fr)"
        gap={2}
      >
        <Card className={classes.cardShadow}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[500] }}>1</Avatar>}
            title={prompt1T(state.questionOne)}
            subheader="cleanse that thang!"
          />
          <CardMedia
            component="img"
            height="500"
            image={prompt1M(state.questionOne)}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt1D(state.questionOne)}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cardShadow}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[600] }}>2</Avatar>}
            title={prompt2T(state.questionTwo)}
            subheader="treat that thang!"
          />
          <CardMedia
            component="img"
            height="500"
            image={prompt2M(state.questionTwo)}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt2D(state.questionTwo)}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cardShadow}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[700] }}>3</Avatar>}
            title={prompt3T(state.questionThree)}
            subheader="Moisturizing time!"
          />
          <CardMedia
            component="img"
            height="500"
            image={prompt3M(state.questionThree)}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt3D(state.questionThree)}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cardShadow}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[800] }}>4</Avatar>}
            title={prompt4T(state.questionFour)}
            subheader="cleanse that thang!"
          />
          <CardMedia
            component="img"
            height="500"
            image={prompt4M(state.questionFour)}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt4D(state.questionFour)}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cardShadow}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[900] }}>5</Avatar>}
            title={prompt5T(state.questionFive)}
            subheader="cleanse that thang!"
          />
          <CardMedia
            component="img"
            height="500"
            image={prompt5M(state.questionFive)}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt5D(state.questionFive)}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Results;
