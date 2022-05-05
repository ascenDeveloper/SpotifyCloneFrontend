import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Spotify() {
  return (
    <Container>
        <div className="spotify__body">
            <Sidebar></Sidebar>
            <div className="body">
                <Navbar></Navbar>
                <div className="body__contents">
                    <Body></Body>
                </div>
            </div>
        </div>
        <div className="spotify__footer"></div>
    </Container>
  )
}

export default Spotify;

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
`;