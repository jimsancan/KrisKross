import React from 'react';
import styled from 'styled-components';
import { SmallerButton } from './Buttons';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    text-align: center;
    padding: ${p => p.theme.remSpacing(1)};
    margin: ${p => p.theme.remSpacing(1)};
    min-height: 225px;
    position: relative;
`;

const Title = styled.div`
    font-size: ${p => p.theme.remSpacing(1.5)};
    font-weight: 700;
`;

const Description = styled.div`
    margin-top: ${p => p.theme.remSpacing(.5)};
`;

const Button = styled(SmallerButton)`
    margin-top: ${p => p.theme.remSpacing(.5)};
`;

const StyledLink = styled(Link)`
    position: absolute;
    bottom: 5%;
    right: 0;
    left: 0;
`;

const ClassTile = ({ buttonContent, title, time, description }) => {
    return ( 
        <Wrapper>
            <Title>{title}</Title>
            <div>{time}</div>
            <Description>{description}</Description>
            <StyledLink to="/classes"><Button>{buttonContent}</Button></StyledLink>
        </Wrapper>
    );
}

export default ClassTile;