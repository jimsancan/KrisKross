import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import '../global.scss';
import { theme } from '../theme';
import { device } from '../device';
import About from './About';
import ClassTile from './ClassTile';
import ClassesIframe from './ClassesIFrame';

const Wrapper = styled.div`
    margin-bottom: ${p => p.theme.remSpacing(3)};
`;

const StyledVideo = styled.video`
    background-size: cover;
    background-position: 50% 50%;
    position: absolute;
    margin: auto;
    width: 100%;
    height: 100vh;
    right: -100%;
    bottom: -100%;
    top: -100%;
    left: -100%;
    object-fit: cover;
    z-index: -100;
    background-image: url("https://uploads-ssl.webflow.com/5ed2fb026103a3850ce9f8fd/5ed303d3ef82ae545a7f11bd_Sequence 06_2-poster-00001.jpg");
`;

const LeftParent = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
`;

const LeftSlideIn = styled.div`
    z-index: 1;
    position: absolute;
    font-size: ${p => p.theme.remSpacing(3.5)};
    line-height: 1;
    @media ${device.min.tablet} {
        font-size: ${p => p.theme.remSpacing(5)};
    }
    @media ${device.min.desktop} {
        font-size: ${p => p.theme.remSpacing(7)};
    }
    margin-left: ${p => p.theme.remSpacing(2)};
    text-align: left;
    left: 100%;
    right: -100%;
    color: white;
    transition: all;
    transition-duration: .75s;
`;

const RightSlideIn = styled.div`
    z-index: 1;
    position: absolute;
    font-size: ${p => p.theme.remSpacing(3.5)};
    line-height: 1;
    @media ${device.min.tablet} {
        font-size: ${p => p.theme.remSpacing(5)};
    }
    @media ${device.min.desktop} {
        font-size: ${p => p.theme.remSpacing(7)};
    }
    margin-right: ${p => p.theme.remSpacing(2)};
    text-align: right;
    right: 100%;
    left: -100%;
    color: white;
    transition: all;
    transition-duration: .75s;
`;


const RightParent = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
`;

const ClassCol = styled(Col)`
    padding: 0;
`;

const ClassesHeader = styled.div`
    font-size: ${p => p.theme.remSpacing(2)};
    text-align: center;
    margin-top: ${p => p.theme.remSpacing(2)}
`;

const ClassesSubheaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ClassesSubheader = styled.div`
    text-align: center;
    width: 80%;
`;

const ClassesRow = styled(Row)`
    justify-content: center;
`;

const bootcampDescription = `Circuit style bootcamp. Most classes have high impact cardio exercises but can be adapted for little to no impact. No equipment - all bodyweight`;
const bootcampBandsDescription = `Strength training bootcamp with mini resistance bands. No cardio or high impact. Mini bands or weights required - makeshift household items welcome`;

const App = ({ className }) => {
    const [slideRight, setSlideRight] = useState(false);
    const [slideLeft, setSlideLeft] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSlideLeft(true);
        }, 1000)
        setTimeout(() => {
            setSlideRight(true);
        }, 2000)
    });

    return (
        <Router className={className} >
            <ThemeProvider theme={theme}>
                <NavBar />
                
                <Switch>
                    <Route exact path="/classes">
                        <ClassesIframe />
                    </Route>
                    <Route exact path="/">
                        <Wrapper>
                            <div> 
                                <LeftParent >
                                    <LeftSlideIn className={slideLeft ? 'slide' : null}>The Devil Works Hard</LeftSlideIn>
                                </LeftParent>
                                <RightParent>
                                    <RightSlideIn className={slideRight ? 'slide' : null}>Kris Works You Harder</RightSlideIn>
                                </RightParent>
                                <StyledVideo autoPlay loop muted playsInline>
                                    <source src="https://uploads-ssl.webflow.com/5ed2fb026103a3850ce9f8fd/5ed303d3ef82ae545a7f11bd_Sequence 06_2-transcode.mp4" />
                                    <source src="https://uploads-ssl.webflow.com/5ed2fb026103a3850ce9f8fd/5ed303d3ef82ae545a7f11bd_Sequence 06_2-transcode.webm" />
                                </StyledVideo>
                            </div>
                            <About />
                            <ClassesHeader>Classes</ClassesHeader>
                            <ClassesSubheaderWrapper>
                                <ClassesSubheader>These classes are designed to meet you at your level. Options are always available and encouraged. Make the workout work for you! Yoga mat, towel, and water are recommended but not required.</ClassesSubheader>
                            </ClassesSubheaderWrapper>
                            <Container fluid>
                                <ClassesRow>
                                    <ClassCol sm="12" lg="4"><ClassTile buttonContent="Classes" title="Bootcamp" time="45 min" description={bootcampDescription} /></ClassCol>
                                    <ClassCol sm="12" lg="4"><ClassTile buttonContent="Classes" title="Bootcamp with Bands" time="45 min" description={bootcampBandsDescription} /></ClassCol>
                                </ClassesRow>
                            </Container>
                        </Wrapper>
                    </Route>
                </Switch>
            </ThemeProvider>  
        </Router>
    );
};

export default App;