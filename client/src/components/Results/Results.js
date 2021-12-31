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
  CardActions
} from "@mui/material";
import { useStyles } from "./styles";
import { blue } from "@mui/material/colors";
import ScienceIcon from "@mui/icons-material/Science";
import {
  prompt1T,
  prompt1M,
  prompt1D,
  prompt1L,
  prompt2T,
  prompt2M,
  prompt2D,
  prompt2L,
  prompt3T,
  prompt3M,
  prompt3D,
  prompt3L,
  prompt4T,
  prompt4M,
  prompt4D,
  prompt4L,
  prompt5T,
  prompt5M,
  prompt5D,
  prompt5L
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
        <Card raised elevation={6}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[500] }}>1</Avatar>}
            title={prompt1T(state.questionOne)}
            subheader="Step 1"
          />
          <CardMedia
            component="img"
            image={prompt1M(state.questionOne)}
            className={classes.imgSize}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt1D(state.questionOne)}
            </Typography>
          </CardContent>
          <CardActions className={classes.linkContainer}>
            <a href={prompt1L(state.questionOne)} target="_blank" rel="noopener noreferrer" className={classes.buyLink}>
              Buy Now
            </a>
          </CardActions>
        </Card>

        <Card raised elevation={6}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[600] }}>2</Avatar>}
            title={prompt2T(state.questionTwo)}
            subheader="Step 2"
          />
          <CardMedia
            component="img"
            image={prompt2M(state.questionTwo)}
            className={classes.imgSize}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt2D(state.questionTwo)}
            </Typography>
          </CardContent>
          <CardActions className={classes.linkContainer}>
          <a href={prompt2L(state.questionTwo)} target="_blank" rel="noopener noreferrer" className={classes.buyLink}>
              Buy Now
            </a>
          </CardActions>
        </Card>

        <Card raised elevation={6}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[700] }}>3</Avatar>}
            title={prompt3T(state.questionThree)}
            subheader="Step 3"
          />
          <CardMedia
            component="img"
            image={prompt3M(state.questionThree)}
            className={classes.imgSize}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt3D(state.questionThree)}
            </Typography>
          </CardContent>
          <CardActions className={classes.linkContainer}>
          <a href={prompt3L(state.questionThree)} target="_blank" rel="noopener noreferrer" className={classes.buyLink}>
              Buy Now
            </a>
          </CardActions>
        </Card>

        <Card raised elevation={6}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[800] }}>4</Avatar>}
            title={prompt4T(state.questionFour)}
            subheader="Step 4"
          />
          <CardMedia
            component="img"
            image={prompt4M(state.questionFour)}
            className={classes.imgSize}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt4D(state.questionFour)}
            </Typography>
          </CardContent>
          <CardActions className={classes.linkContainer}>
          <a href={prompt4L(state.questionFour)} target="_blank" rel="noopener noreferrer" className={classes.buyLink}>
              Buy Now
            </a>
          </CardActions>
        </Card>

        <Card raised elevation={6}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[900] }}>5</Avatar>}
            title={prompt5T(state.questionFive)}
            subheader="Step 5"
          />
          <CardMedia
            component="img"
            image={prompt5M(state.questionFive)}
            className={classes.imgSize}
          />
          <CardContent>
            <Typography variant="body1">
              {prompt5D(state.questionFive)}
            </Typography>
          </CardContent>
          <CardActions className={classes.linkContainer}>
          <a href={prompt5L(state.questionFive)} target="_blank" rel="noopener noreferrer" className={classes.buyLink}>
              Buy Now
            </a>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default Results;
