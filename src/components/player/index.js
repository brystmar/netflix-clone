import React, { useState, useContext, createContext, useRef } from 'react';
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

Player.Video = function PlayerVideo() {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    const { playerRef } = useRef(null);

    return showPlayer
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video id="video-player" ref={playerRef} aria-label="video-player" controls>
                        <source src="/videos/bunny.mp4" type="video/mp4" />
                    </video>
                    <Close
                        aria-label="Close"
                        onClick={() => {
                            // Pause playback if a video is currently playing
                            // playerRef.current.pause();
                            setShowPlayer(false);
                        }}
                    />
                </Inner>
            </Overlay>,
            document.body
        ) : null
}

Player.Button = function PlayerButton() {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
}
