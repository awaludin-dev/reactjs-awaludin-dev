import React from "react";
import styled from 'styled-components';

const Kaki = styled.footer`
    padding: 0 0 1px 0;
    background-color: #17a2b8;
    width: 100%;
`

const H3 = styled.h3`
    text-align: center;
    padding: 8px 0 0 0;
    font-size: 18px;
`

export default class Footer extends React.Component {
    render() {
        return (
            <Kaki>
                <H3>© Awaludin - All right reserved</H3>
            </Kaki>
        )
    }
}