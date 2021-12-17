import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const StepCard = () => {
    return (
        <Card >
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: blue[500] }}>
                    1
                </Avatar>
            }
            title='First Step'
            subheader='cleanse that thang!'
            />
            <CardMedia 
                component="img"
                height="500"
                image="https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
            <CardContent>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel odio at tortor ornare vulputate. Phasellus pharetra orci at dolor tempus, mollis dapibus mauris mollis. Praesent bibendum tortor at gravida.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StepCard;
