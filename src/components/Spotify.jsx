import React from 'react';
import styled from 'styled-components';

function Spotify() {
  return (
    <Container>
        <div className="spotify__body">
            <div className="body">
                <div className="body__contents"></div>
            </div>
        </div>
        <div className="spotify__footer"></div>
    </Container>
  )
}

export default Spotify;

const Container = styled.div`

`;