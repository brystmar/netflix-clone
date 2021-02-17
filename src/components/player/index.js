import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Button, Close } from "./styles/player"

export const PlayerContext = createContext();

export default function Player({ children, ...props }) {
    const [ showPlayer, setShowPlayer ] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...props}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...props }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src="/videos/bunny.mp4" type="video/mp4" />
                    </video>
                </Inner>
            </Overlay>,
            document.body
        ) : null
}

Player.Button = function PlayerButton({ ...props }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
}
