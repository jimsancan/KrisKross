import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from  'react-bootstrap/Container';
import styled from "styled-components";
import { device } from '../device';
import { AboutContent } from '../Content';

const StyledContainer = styled(Container)`
    width: 95%;
`;

const StyledImg = styled.img`
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    border-radius: ${p => p.theme.remSpacing(.25)}
`;

const Title = styled.div`
    font-size: ${p => p.theme.remSpacing(2)};
    text-align: center;
    margin-bottom: ${p => p.theme.remSpacing(1)};
`;

const StyledCol = styled(Col)`
    @media ${device.max.tablet} {
        margin-top: ${p => p.theme.remSpacing(2)};
    }
`;

const About = () => {
    return (
        <div id="about">
            <Title>Meet Kris</Title>
            <StyledContainer fluid>
                <Row>
                    <Col sm="12" md="6" lg="6"><StyledImg src="https://uploads-ssl.webflow.com/5ed2fb026103a3850ce9f8fd/5ed30e5910bcba6f6f56dc22_Group%20Copy%203%402x.png"/></Col>
                    <StyledCol sm="12" md="6" lg="6"><AboutContent/></StyledCol>
                </Row>
            </StyledContainer>
        </div>
    );
}

export default About;