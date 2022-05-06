import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";
import styled from "styled-components";

function Playlist() {
    const [{ token, playlists }, dispatch] = useStateProvider();

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch]);

    return (
        <Container>
            <ul>
                {
                    playlists.map(({ name, id }) => {
                        return <li key={id}>{name}</li>;
                    })
                }
                {
                    playlists.map(({ name, id }) => {
                        return <li key={id}>{name}</li>;
                    })
                }
                {
                    playlists.map(({ name, id }) => {
                        return <li key={id}>{name}</li>;
                    })
                }

            </ul>

        </Container>
    );
}

export default Playlist;

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 52vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
        }
    li {
      cursor: pointer;
      display: flex;
      gap: 1rem;
      transition: 0.3 ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;
