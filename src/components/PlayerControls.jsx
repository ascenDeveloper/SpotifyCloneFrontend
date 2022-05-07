import React from 'react';
import styled from 'styled-components';
import {
    BsFillPlayCircleFill,
    BsFillPauseCircleFill,
    BsShuffle
} from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { useStateProvider } from '../utils/StateProvider'

function PlayerControls() {
    const [{ token, playerState }, dispatch] = useStateProvider();
    return (
        <Container>
            <div className="shuffle">
                <BsShuffle />
            </div>
            <div className="previous">
                <CgPlayTrackPrev />
            </div>
            <div className="state">
                {playerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
            </div>
        </Container>
    )
}

export default PlayerControls;

const Container = styled.div`
    
`;