import axios from 'axios';
import React, {useEffect} from 'react';
import {useStateProvider} from '../utils/StateProvider';

function Playlist() {
    const [{token,dispatch}] = useStateProvider();

    useEffect(()=>{
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization:'Bearer '+ token,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            
        };
        getPlaylistData();
        
    }, [token,dispatch]);

    return (
    <div>Playlist</div>
  )
}

export default Playlist;
