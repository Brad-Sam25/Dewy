import React from 'react';
import { Jumbotron, Container } from "react-bootstrap";
import classes from './About.module.css'


const About = () => {
    return (
        <div>
            <Jumbotron fluid className = {classes.jumboImage}>
				<Container>
					<h1>The Story of Dewy</h1>
				</Container>
			</Jumbotron>

            <Container>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae arcu eget lacus suscipit suscipit nec eget leo. Donec id orci sit amet nibh placerat feugiat. Aliquam non porta metus. Ut luctus, libero quis interdum sollicitudin, lectus orci mattis libero, in lobortis tellus ligula a augue. Suspendisse eleifend massa euismod convallis pharetra. Nullam facilisis tempor enim non accumsan. Nunc vitae dictum urna. Aenean nec tincidunt lorem. Suspendisse potenti. Suspendisse semper porta purus id gravida.

                Maecenas gravida leo vitae nunc volutpat facilisis. Aliquam non luctus sem. Nam ac tincidunt ante. In libero metus, efficitur quis nibh eget, congue sagittis magna. Praesent.
                </p>
            </Container>
        </div>
    )
}

export default About
