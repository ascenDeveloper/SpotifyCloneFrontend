import axios from 'axios';
import React, {useEffect} from 'react';
import { reducerCases } from '../utils/Constants';
import {useStateProvider} from '../utils/StateProvider';

function Playlist() {
    const [{token,dispatch}] = useStateProvider();

    useEffect(()=>{
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization:'Bearer '+ token,
                    'Content-Type': 'application/json',
                },
            });
            const {items} = response.data;
            const playlist = items.map(({name , id}) => {
                return {name, id};
            })
            dispatch({type:reducerCases.SET_PLAYLISTS, playlist})
            
        };
        getPlaylistData();
        
    }, [token,dispatch]);

    return (
    <div>Playlist</div>
  )
}

export default Playlist;
