import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useStyles } from "./styles";
import { blue } from "@mui/material/colors";

const Results = () => {
  const classes = useStyles();
  return (
    <Container align="center">
      <Box>
        <Typography variant="h2">Your Results</Typography>
      </Box>
      <Box
        component="main"
        display="grid"
        gridTemplateRows="repeat(5, 1fr)"
        gap={2}
      >
        <Paper elevated={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: blue[500] }}>1</Avatar>}
              title="First Step"
              subheader="cleanse that thang!"
            />
            <CardMedia
              component="img"
              height="500"
              image="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vel odio at tortor ornare vulputate. Phasellus pharetra orci at
                dolor tempus, mollis dapibus mauris mollis. Praesent bibendum
                tortor at gravida.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
        <Paper  elevated={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: blue[500] }}>2</Avatar>}
              title="First Step"
              subheader="cleanse that thang!"
            />
            <CardMedia
              component="img"
              height="500"
              image="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vel odio at tortor ornare vulputate. Phasellus pharetra orci at
                dolor tempus, mollis dapibus mauris mollis. Praesent bibendum
                tortor at gravida.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
        <Paper  elevated={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: blue[500] }}>3</Avatar>}
              title="First Step"
              subheader="cleanse that thang!"
            />
            <CardMedia
              component="img"
              height="500"
              image="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vel odio at tortor ornare vulputate. Phasellus pharetra orci at
                dolor tempus, mollis dapibus mauris mollis. Praesent bibendum
                tortor at gravida.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
        <Paper elevated={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: blue[500] }}>4</Avatar>}
              title="First Step"
              subheader="cleanse that thang!"
            />
            <CardMedia
              component="img"
              height="500"
              image="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vel odio at tortor ornare vulputate. Phasellus pharetra orci at
                dolor tempus, mollis dapibus mauris mollis. Praesent bibendum
                tortor at gravida.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
        <Paper elevated={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: blue[500] }}>5</Avatar>}
              title="First Step"
              subheader="cleanse that thang!"
            />
            <CardMedia
              component="img"
              height="500"
              image="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vel odio at tortor ornare vulputate. Phasellus pharetra orci at
                dolor tempus, mollis dapibus mauris mollis. Praesent bibendum
                tortor at gravida.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Box>
    </Container>
  );
};

export default Results;
