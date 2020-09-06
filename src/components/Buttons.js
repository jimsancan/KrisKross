import React from 'react';
import styled from "styled-components";

const RoundedButton = styled.button`
    height: ${props => props.theme.remSpacing(3)};
    min-width: ${props => props.theme.remSpacing(15)};
    border-radius: ${props => props.theme.remSpacing(5)};
    border: none;
    background: ${props => props.theme.colors.primaryGreen};
    color: ${props => props.theme.colors.white};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;

const SmallerButton = styled(RoundedButton)`
    height: ${props => props.theme.remSpacing(2)};
    min-width: ${props => props.theme.remSpacing(8)};
    border-radius: ${props => props.theme.remSpacing(5)};
    font-size: ${props => props.theme.remSpacing(1)};
`;

const GradientButton = styled(RoundedButton)`
    background: linear-gradient(45deg,rgba(255,253,148,.7) 0%,rgba(250,148,255,.7) 40%,rgba(148,253,255,.7) 70%,rgba(239,250,250,.7) 100%);
`;

const SmallerGradientButton = styled(SmallerButton)`
    background: linear-gradient(45deg,rgba(255,253,148,.7) 0%,rgba(250,148,255,.7) 40%,rgba(148,253,255,.7) 70%,rgba(239,250,250,.7) 100%);
`;

const Button = ({ children }) => {
    return <RoundedButton>{children}</RoundedButton>
};


export { Button, SmallerButton, GradientButton, SmallerGradientButton };